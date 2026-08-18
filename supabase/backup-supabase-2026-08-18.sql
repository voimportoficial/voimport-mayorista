-- ============================================================
-- VO IMPORT
-- BACKUP SUPABASE
-- Fecha: 18/08/2026
--
-- PEDIDOS WEB
-- - Reserva automática de stock
-- - Confirmación de pedido y conversión a venta
-- - Cancelación y devolución de stock
-- - Consulta de pedidos pendientes para Gestión
--
-- IMPORTANTE:
-- Este archivo es un RESPALDO.
-- No ejecutar sobre la base actual salvo que sea necesario
-- restaurar estas funciones.
-- ============================================================


-- ============================================================
-- 1. MARCAR PEDIDOS QUE TIENEN STOCK RESERVADO
-- ============================================================

alter table public.pedidos_web
add column if not exists reservado_at timestamptz;


-- ============================================================
-- 2. RESERVAR STOCK AL INGRESAR UN ITEM DE PEDIDO WEB
-- ============================================================

create or replace function public.reservar_stock_item_pedido_web()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
    v_estado text;
begin

    select estado
    into v_estado
    from public.pedidos_web
    where id = new.pedido_id
    for update;

    if v_estado is distinct from 'pendiente' then
        raise exception
            'El pedido web no está pendiente.';
    end if;


    update public.productos
    set stock = stock - new.cantidad
    where id = new.producto_id
      and stock >= new.cantidad;


    if not found then
        raise exception
            'Stock insuficiente para el producto %.',
            new.nombre;
    end if;


    update public.pedidos_web
    set reservado_at =
        coalesce(
            reservado_at,
            now()
        )
    where id = new.pedido_id;


    return new;

end;
$$;


drop trigger if exists
trg_reservar_stock_pedido_web
on public.pedido_web_items;


create trigger trg_reservar_stock_pedido_web
after insert
on public.pedido_web_items
for each row
execute function
public.reservar_stock_item_pedido_web();


-- ============================================================
-- 3. CONFIRMAR PEDIDO WEB
-- LO TRANSFORMA EN VENTA COBRADA
-- ============================================================

create or replace function public.confirmar_pedido_web(
    p_pedido_id bigint,
    p_metodo_pago text,
    p_observaciones text default null
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare

    v_pedido public.pedidos_web%rowtype;

    v_items jsonb;

    v_total numeric := 0;

    v_venta_id bigint;

begin

    if auth.uid() is null then
        raise exception
            'Usuario no autenticado.';
    end if;


    select *
    into v_pedido
    from public.pedidos_web
    where id = p_pedido_id
    for update;


    if not found then
        raise exception
            'Pedido web inexistente.';
    end if;


    if v_pedido.estado <> 'pendiente' then
        raise exception
            'El pedido ya no está pendiente.';
    end if;


    if v_pedido.venta_id is not null then
        raise exception
            'El pedido ya fue convertido en venta.';
    end if;


    select
        coalesce(
            sum(
                cantidad *
                precio_unitario
            ),
            0
        ),
        coalesce(
            jsonb_agg(
                jsonb_build_object(
                    'producto_id',
                    producto_id,
                    'nombre',
                    nombre,
                    'cantidad',
                    cantidad,
                    'precio_unitario_original',
                    precio_unitario,
                    'descuento_tipo',
                    null,
                    'descuento_valor',
                    0
                )
                order by id
            ),
            '[]'::jsonb
        )
    into
        v_total,
        v_items
    from public.pedido_web_items
    where pedido_id =
        p_pedido_id;


    if v_total <= 0 then
        raise exception
            'El pedido no tiene productos válidos.';
    end if;


    -- --------------------------------------------------------
    -- Si el pedido ya tenía el stock reservado,
    -- lo devolvemos temporalmente.
    --
    -- registrar_venta_v3 vuelve a descontarlo dentro
    -- de la misma operación.
    --
    -- Resultado final:
    -- el stock queda descontado UNA SOLA VEZ.
    -- --------------------------------------------------------

    if v_pedido.reservado_at is not null then

        update public.productos p
        set stock =
            p.stock +
            i.cantidad
        from public.pedido_web_items i
        where i.pedido_id =
            p_pedido_id
          and i.producto_id =
            p.id;

    end if;


    select public.registrar_venta_v3(
        p_items =>
            v_items,

        p_cliente_id =>
            null,

        p_observaciones =>
            nullif(
                trim(
                    coalesce(
                        p_observaciones,
                        ''
                    )
                ),
                ''
            ),

        p_pago_inicial =>
            v_total,

        p_metodo_pago =>
            p_metodo_pago,

        p_descuento_general_tipo =>
            null,

        p_descuento_general_valor =>
            0
    )
    into v_venta_id;


    update public.pedidos_web
    set
        estado =
            'confirmado',

        venta_id =
            v_venta_id,

        confirmado_at =
            now(),

        cancelado_at =
            null,

        motivo_cancelacion =
            null

    where id =
        p_pedido_id;


    return v_venta_id;

end;
$$;


-- ============================================================
-- 4. CANCELAR PEDIDO WEB
-- DEVUELVE EL STOCK RESERVADO
-- ============================================================

create or replace function public.cancelar_pedido_web(
    p_pedido_id bigint,
    p_motivo text default null
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare

    v_pedido public.pedidos_web%rowtype;

begin

    if auth.uid() is null then
        raise exception
            'Usuario no autenticado.';
    end if;


    select *
    into v_pedido
    from public.pedidos_web
    where id =
        p_pedido_id
    for update;


    if not found then
        raise exception
            'Pedido web inexistente.';
    end if;


    if v_pedido.estado <> 'pendiente' then
        raise exception
            'Solo se pueden cancelar pedidos pendientes.';
    end if;


    if v_pedido.reservado_at is not null then

        update public.productos p
        set stock =
            p.stock +
            i.cantidad
        from public.pedido_web_items i
        where i.pedido_id =
            p_pedido_id
          and i.producto_id =
            p.id;

    end if;


    update public.pedidos_web
    set
        estado =
            'cancelado',

        cancelado_at =
            now(),

        motivo_cancelacion =
            nullif(
                trim(
                    coalesce(
                        p_motivo,
                        ''
                    )
                ),
                ''
            )

    where id =
        p_pedido_id;


    return p_pedido_id;

end;
$$;


-- ============================================================
-- 5. PEDIDOS WEB PARA EL PANEL DE GESTIÓN
-- ============================================================

create or replace function public.obtener_pedidos_web_gestion()
returns table (

    id bigint,
    created_at timestamptz,
    codigo text,
    estado text,
    origen text,
    total numeric,
    observaciones text,
    venta_id bigint,
    confirmado_at timestamptz,
    cancelado_at timestamptz,
    motivo_cancelacion text,
    reservado boolean,
    items jsonb

)
language plpgsql
security definer
set search_path = public
as $$
begin

    if auth.uid() is null then
        raise exception
            'Usuario no autenticado.';
    end if;


    return query

    select

        p.id,
        p.created_at,
        p.codigo,
        p.estado,
        p.origen,
        p.total,
        p.observaciones,
        p.venta_id,
        p.confirmado_at,
        p.cancelado_at,
        p.motivo_cancelacion,

        (
            p.reservado_at
            is not null
        ) as reservado,

        coalesce(
            (
                select jsonb_agg(
                    jsonb_build_object(
                        'id',
                        i.id,
                        'producto_id',
                        i.producto_id,
                        'slug',
                        i.slug,
                        'nombre',
                        i.nombre,
                        'cantidad',
                        i.cantidad,
                        'precio_unitario',
                        i.precio_unitario,
                        'tipo_precio',
                        i.tipo_precio,
                        'subtotal',
                        i.subtotal
                    )
                    order by i.id
                )
                from public.pedido_web_items i
                where i.pedido_id =
                    p.id
            ),
            '[]'::jsonb
        ) as items

    from public.pedidos_web p

    where p.estado =
        'pendiente'

    order by
        p.created_at asc;

end;
$$;


-- ============================================================
-- 6. PERMISOS
-- SOLO EL USUARIO AUTENTICADO DE GESTIÓN
-- ============================================================

revoke all
on function public.confirmar_pedido_web(
    bigint,
    text,
    text
)
from public;


revoke all
on function public.cancelar_pedido_web(
    bigint,
    text
)
from public;


revoke all
on function public.obtener_pedidos_web_gestion()
from public;


grant execute
on function public.confirmar_pedido_web(
    bigint,
    text,
    text
)
to authenticated;


grant execute
on function public.cancelar_pedido_web(
    bigint,
    text
)
to authenticated;


grant execute
on function public.obtener_pedidos_web_gestion()
to authenticated;


-- ============================================================
-- FIN DEL BACKUP
-- ============================================================