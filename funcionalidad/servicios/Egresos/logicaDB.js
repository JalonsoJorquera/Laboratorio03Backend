const Egreso = require('./Egreso.model');

const crearEgresoDB = async (egreso) => {
    let respuesta = await Egreso.create(egreso);
    return respuesta;
}

const obtenerEgresoDB = async () => {
    let respuesta = await Egreso.find();
    return respuesta;
}

module.exports = {
    crearEgresoDB,
    obtenerEgresoDB,
}