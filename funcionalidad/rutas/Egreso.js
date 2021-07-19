const express = require('express');
const router = express.Router();
const controlador = require('../servicios/Egresos/controlador');

router.post('/crear-egreso',controlador.crearEgreso);
router.get('/obtener-egreso',controlador.obtenerEgreso);
router.get('/obtener-egresos-usuario/:id',controlador.obtenerEgresoUsuario)

module.exports = router;