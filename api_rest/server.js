const express = require('express')
const body_parser = require('body-parser')

const config = require('./config')
const db = require('./db')
const routes = require('./network/routes')

const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger'); // Configuracion de Swagger

var app = express()

db(config.DB_URL)


app.use( body_parser.json() )
app.use( body_parser.urlencoded({extended:false}) )

// Definir rutas API antes de servir archivos estaticos
routes(app);

// Servir documentacion Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Servir archivos estaticos
app.use('/', express.static('public'))


app.listen( config.PORT )
console.log(`La aplicacion se encuentra arriba en http://localhost:${config.PORT}/`);
console.log(`Documentación disponible en http://localhost:${config.PORT}/api-docs`);