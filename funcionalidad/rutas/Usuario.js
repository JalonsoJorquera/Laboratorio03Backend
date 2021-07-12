const express = require('express');
const router = express.Router();
const controlador = require('../servicios/Usuarios/controlador');

router.post('/crear-registro',controlador.crearUsuario);
router.get('/obtener-registro',controlador.obtenerUsuario);

module.exports = router;