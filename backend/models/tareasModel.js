const moongose = require('mongoose');
const tareasSchema = moongose.Schema({
    descripcion: {
        type: String,
        required: [true, 'Por favor ingrese una descripcion']
    }
}, {
    timestamps: true
})
module.exports = moongose.model('Tarea', tareasSchema)