const RegistroUsuario = require('./registroUsuario.model');

const crearRegistroUsuarioDB = async (registroUsuario) => {
    let respuesta = await RegistroUsuario.create(registroUsuario);
    return respuesta;
}

const obtenerRegistroUsuarioDB = async () => {
    let respuesta = await RegistroUsuario.find();
    return respuesta;
}

module.exports = {
    crearRegistroUsuarioDB,
    obtenerRegistroUsuarioDB,
}