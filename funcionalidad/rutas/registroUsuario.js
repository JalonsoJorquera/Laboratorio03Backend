const express = require('express');
const router = express.Router();
const controlador = require('../servicios/registroUsuarios/controlador');

router.post('/crear-registro',controlador.crearRegistroUsuario);
router.get('/obtener-registro',controlador.obtenerRegistroUsuario);

module.exports = router;