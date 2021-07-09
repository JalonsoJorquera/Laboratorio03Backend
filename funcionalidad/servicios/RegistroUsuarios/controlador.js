const logicaDB = require('./logicaDB');

const obtenerRegistroUsuario = async (req,res) =>{
    try {
        let respuesta = await logicaDB.obtenerRegistroUsuarioDB();
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

const crearRegistroUsuario = async (req,res) =>{
    let registroUsuario = req.body;
    try {
        let respuesta = await logicaDB.crearRegistroUsuarioDB(registroUsuario);
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
    crearRegistroUsuario,
    obtenerRegistroUsuario,
    
}