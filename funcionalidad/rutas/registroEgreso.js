const express = require('express');
const router = express.Router();
const controlador = require('../servicios/registroEgresos/controlador');

router.post('/crear-egreso',controlador.crearRegistroEgreso);
router.get('/obtener-egreso',controlador.obtenerRegistroEgreso);

module.exports = router;