const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController.js')

//GET
 /** 
* @swagger 
* /usuarios: 
*   get: 
*     summary: Obtener un Usuario 
*     description: Devuelve un usuarios
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
*     produces:  
*       - application/json 
*     parameters: 
*       - in: query 
*         name: Id 
*         description: ID del usuario 
*     responses: 
*       200: 
*         description: Regresa un usuario 
*         type: json 
*/ 
router.get('/', usuarioController.consultaUsuario)

//POST
router.post('/', usuarioController.insertarUsuario)

//DELETE
router.delete('/', usuarioController.eliminarUsuario)

//PUT
router.put('/', usuarioController.modificarUsuario)

//PATCH
router.patch('/', usuarioController.actualizarUsuario)

module.exports.router=router;