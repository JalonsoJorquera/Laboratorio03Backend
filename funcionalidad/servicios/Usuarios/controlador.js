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
    let Usuario = req.body;
    try {
        let respuesta = await logicaDB.crearUsuarioDB(Usuario);
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