const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController.js')

//GET
/** 
 * @swagger 
 * /usuarios: 
 *   get: 
 *     summary: Obtener un Usuario 
 *     description: Devuelve un usuario
 *     x-code-samples:
 *       - lang: "cURL"
 *         source: |
 *           curl -X GET "localhost:3000/usuarios" -H "accept: application/json"
 *       - lang: "javascript"
 *         source: |
 *           fetch("localhost:3000/usuarios", {
 *             method: "GET",
 *             headers: { "accept": "application/json" }
 *           }).then(response => response.json())
 *             .then(data => console.log(data));
 *     parameters: 
 *       - in: query 
 *         name: Id 
 *         description: ID del usuario 
 *         required: false
 *         schema:
 *           type: integer
 *     responses: 
 *       200: 
 *         description: Regresa un usuario 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Id:
 *                   type: integer
 *                 Nombre:
 *                   type: string
 *                 Apellido:
 *                   type: string
 *                 Telefono:
 *                   type: string
 */
router.get('/', usuarioController.consultaUsuario)


module.exports.router=router;