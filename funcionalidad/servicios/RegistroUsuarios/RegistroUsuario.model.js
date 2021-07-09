const mongoose = require('mongoose');
const { Schema } = mongoose; 

const RegistroUsuario = new Schema({
    nombre:String,
    apellido:String,
    rut: { type:String,default: null },
    correo: String,
    password: String,
})

module.exports = mongoose.model('RegistroUsuario',RegistroUsuario)