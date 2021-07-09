const logicaDB = require('./logicaDB');

const obtenerRegistroEgreso = async (req,res) =>{
    try {
        let respuesta = await logicaDB.obtenerRegistroEgresoDB();
        res.status(200).json({
            'egresos': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}
const crearRegistroEgreso = async (req,res) =>{
    let registroEgreso = req.body;
    try {
        let respuesta = await logicaDB.crearRegistroEgresoDB(registroEgreso);
        res.status(200).json({
            'egreso': respuesta
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
    crearRegistroEgreso,
    obtenerRegistroEgreso,
}