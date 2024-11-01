const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CRUD - Usuarios',
            version: '1.0.0',
            description: 'Documentacion de los métodos HTTP utilizados en el contexto de las API´s que gestionan  usuarios.',
            contact: {
                name: 'Luis David Clavijo Santacruz',
                email: 'luis.cs99.dc@gmail.com'
            },
        },
        servers: [
            { url: 'http://localhost:3000', description: 'Servidor de desarrollo' }
        ],
    },
    apis: ['./components/**/*.js', './network/*.js'], // Paths con los archivos con comentarios Swagger
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerDocs;