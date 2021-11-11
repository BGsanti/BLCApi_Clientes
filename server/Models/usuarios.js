const mongoose = require('mongoose');
const { Schema } = mongoose;
const UsuariosSchema = new Schema({ cedula_usuario: { type: String, requered: true }, nombre_usuario: { type: String, requered: true }, email_usuario: { type: String, requered: true }, usuario: { type: String, requered: true }, password: { type: String, requered: true } });
module.exports = mongoose.model("usuarios", UsuariosSchema);