Tipos de peticiones:
Seguras - lecturas

Idempotentes - la misma accion varias veces seguidas y el mismo estado resultante

cacheables - se puede guardar el resultado


GET - Lectura del recurso

HEAD - Lo mismo que get solo que no devuelve respuesta

POST - Crear nuevos recursos, nuevas entidades, genera cambios en el servidor, por ende cambia el estado del servidor

PUT - Reemplazar los datos en el recurso (Reemplazar por completo)

DELETE - Elimina el recurso del servidor 

CONNECT - Conectar o generar la conexion con el servidor, con el recurso

OPTIONS - Describir opciones de conexion 

TRACE - Envio de mensaje para ver por donde pasa hacia el recurso

PATCH - Modificaciones parciales en el recurso(Reemplazar solo una parte)



Codigos de estado de respuesta

1. Respuestas informativas (100 - 199)
2. Respuestas satisfactorias(200 - 299)
3. Redirecciones (300 - 399)
4. Errores de clientes (400 - 499)
5. Errores de los servidores(500 - 599)

Importantes
200 OK
201 Created
202 Acepted

301 Multiple choise

400 Bad Request
401 Unauthorized
404 Not Foud

