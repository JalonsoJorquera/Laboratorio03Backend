const Usuario = require('./Usuario.model');

const crearUsuarioDB = async (usuario) => {
    let respuesta = await Usuario.create(usuario);
    return respuesta;
}

const obtenerUsuarioDB = async () => {
    let respuesta = await Usuario.find();
    return respuesta;
}

const obtenerIdUsuarioDB = async (id) => {
    let respuesta = await Usuario.findById({_id});
    return respuesta;
}

module.exports = {
    crearUsuarioDB,
    obtenerUsuarioDB,
    obtenerIdUsuarioDB,
}