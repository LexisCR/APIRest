const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController.js')

//GET
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