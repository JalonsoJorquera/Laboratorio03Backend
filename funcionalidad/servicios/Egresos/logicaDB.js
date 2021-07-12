const Egreso = require('./Egreso.model');

const crearEgresoDB = async (Egreso) => {
    let respuesta = await Egreso.create(Egreso);
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