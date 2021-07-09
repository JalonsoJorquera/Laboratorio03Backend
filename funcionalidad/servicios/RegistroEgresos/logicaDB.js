const RegistroEgreso = require('./registroEgreso.model');

const crearRegistroEgresoDB = async (registroEgreso) => {
    let respuesta = await RegistroEgreso.create(registroEgreso);
    return respuesta;
}

const obtenerRegistroEgresoDB = async () => {
    let respuesta = await RegistroEgreso.find();
    return respuesta;
}

module.exports = {
    crearRegistroEgresoDB,
    obtenerRegistroEgresoDB,
}