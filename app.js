// Libreria
const express = require('express')
const app = express()
const port = 3000;

// req es la peticion, nos llegan los headers, parametros que queremos gestionar
// res es la respuesta que queremos enviar al cliente que ha hecho la peticion
app.get('/', (req, res) => {
    console.log(req)
    res.status(200).send('Hola mundo desde el server!')
})

app.listen(port, () => {
    console.log("Server started at port 3000")
})