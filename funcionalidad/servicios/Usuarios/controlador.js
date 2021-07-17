const logicaDB = require('./logicaDB');

const obtenerUsuario = async (req,res) =>{
    try {
        let respuesta = await logicaDB.obtenerUsuarioDB();
        res.status(200).json({
            'usuarios': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

const crearUsuario = async (req,res) =>{
    let usuario = req.body;
    try {
        let respuesta = await logicaDB.crearUsuarioDB(usuario);
        res.status(200).json({
            'usuario': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}


const idUsuario = async (req,res) =>{
    let idusuario = req.param.id;
    try {
        let respuesta = await logicaDB.ObtenerIdUsuarioDB(idusuario,);
        res.status(200).json({
            'usuario': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

module.exports = {
    crearUsuario,
    obtenerUsuario,
    
}