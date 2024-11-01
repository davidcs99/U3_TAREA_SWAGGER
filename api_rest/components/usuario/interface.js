const express = require('express')

const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *       properties:
 *         id:
 *           type: string
 *           description: El ID autoincremental generado  desde la BD para el Usuario
 *         nombre:
 *           type: string
 *           description: Nombre del Usuario
 *         apellido:
 *           type: string
 *           description: Apellido del Usuario
 *         fecha_registro:
 *           type: Date
 *           description: Fecha de registro del Usuario
 *         fecha_actualizacion:
 *           type: Date
 *           description: Fecha de actualizacion del Usuario
 *       example:
 *         id: 6723eae9bbe2865d327b979d	
 *         nombre: David
 *         apellido: Clavijo
 *         fecha registro: 2024-10-31T20:39:05.576Z
 *         fecha actualizacion: 2024-10-31T20:39:05.576Z
 */

/**
 * @swagger
 * tags:
 *   name: CRUD USUARIOS
 *   description: Metodos Http para la gestion de usuarios
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios registrados en el sistema
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 6706d81faef9ecc823a055d6
 *                   nombre:
 *                     type: string
 *                     example: "David"
 *                   apellido:
 *                     type: string
 *                     example: "Clavijo"               
 *                   fecha_registro:
 *                     type: Date
 *                     example: "2024-10-31T21:43:03.396Z"
 *                   fecha_actualizacion:
 *                     type: Date
 *                     example: "2024-10-31T21:43:03.396Z"
 *       400:
 *         description: Bad Request
 */
routes.get('/', function(req, res) {
    controller.obtener_usuario( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Registra un nuevo usuario dentro del sistema
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Bad Request
 */
routes.post('/', function(req, res) {
    controller.insertar_usuario( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Actualiza el usuario con el id
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: String
 *           required: true
 *           description: El id del Usuario
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Bad Request
 */
routes.put('/:id', function(req, res) {
    controller.editar_usuario( req.params.id, req.body)
    .then( (data) => response.success(req, res, data, 200) )
    .catch( (error) => response.error(req, res, error, 400) )
})

/**
 * @swagger
 * /usuario:
 *   delete:
 *     summary: Elimina un usuario del registo
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Bad Request
 */
routes.delete('/', function(req, res) {
    controller.eliminar_usuario( req.body )
    .then( (data) => response.success(req, res, data, 200) )
    .catch( (error) => response.error(req, res, error, 400) )
})

module.exports = routes