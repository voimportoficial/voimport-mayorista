const URL_PEDIDOS_GESTION =
    new URL(
        "./?pedidos_web=1",
        self.registration.scope
    ).href;

const ICONO_NOTIFICACION =
    new URL(
        "./icons/icon-192.png",
        self.registration.scope
    ).href;

self.addEventListener(
    "push",
    (evento) => {
        let datos = {};

        if (evento.data) {
            try {
                datos = evento.data.json();
            } catch {
                datos = {
                    body: evento.data.text()
                };
            }
        }

        const titulo =
            datos.title ||
            "VO IMPORT";

        const opciones = {
            body:
                datos.body ||
                "🛒 Entró un nuevo pedido web.",
            icon: ICONO_NOTIFICACION,
            badge: ICONO_NOTIFICACION,
            tag:
                datos.tag ||
                "pedido-web-vo-import",
            renotify: true,
            data: {
                url:
                    datos.url ||
                    URL_PEDIDOS_GESTION
            }
        };

        evento.waitUntil(
            self.registration.showNotification(
                titulo,
                opciones
            )
        );
    }
);


self.addEventListener(
    "notificationclick",
    (evento) => {
        evento.notification.close();

        const urlDestino =
            evento.notification.data?.url ||
            URL_PEDIDOS_GESTION;

        evento.waitUntil(
            clients
                .matchAll({
                    type: "window",
                    includeUncontrolled: true
                })
                .then(
                    async (ventanas) => {
                        for (
                            const ventana of ventanas
                        ) {
                            if (
                                "navigate" in ventana
                            ) {
                                await ventana.navigate(
                                    urlDestino
                                );
                            }

                            if (
                                "focus" in ventana
                            ) {
                                return ventana.focus();
                            }
                        }

                        if (
                            clients.openWindow
                        ) {
                            return clients.openWindow(
                                urlDestino
                            );
                        }

                        return null;
                    }
                )
        );
    }
);
