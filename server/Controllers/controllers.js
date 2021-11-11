const usuarios = require('../Models/usuarios');
const usucontroller = {};

usucontroller.listar = async(req, res) => {
    const usuario = await usuarios.find();
    res.json(usuario);
};

usucontroller.listarId = async(req, res) => {
    const usuario = await usuarios.findById(req.params.id);
    res.json(usuario);
}

usucontroller.guardar = async(req, res) => {
    const usuario = new usuarios(req.body);
    await usuario.save();
    res.json({ 'Status': '200 Usuario guardado' });
};

usucontroller.actualizar = async(req, res) => {
    const { id } = req.params;
    const usuario = { nombre_usuario: req.body.nombre_usuario, email_usuario: req.body.email_usuario, };
    await usuarios.findByIdAndUpdate(id, { $set: usuario }, { new: true });
    res.json({ 'Status': '200 Usuario Actualizado' });
};

usucontroller.eliminar = async(req, res) => {
    const usuario = await usuarios.findByIdAndRemove(req.params.id);
    res.json({ 'Status': '200 Usuario Eliminado' });
}

module.exports = usucontroller;