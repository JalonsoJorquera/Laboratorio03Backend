const express = require('express');
const router = express.Router();
const controlador = require('../servicios/Usuarios/controlador');

router.post('/crear-usuario',controlador.crearUsuario);
router.get('/obtener-usuario',controlador.obtenerUsuario);
module.exports = router;