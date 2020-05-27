const { Schema,model } = require ('mongoose')

const imgschema = new Schema({
    title:       { type: String}, // Nombre del servicio
    description: { type: String}, // Experiencia del cliente
    personal:    { type: String}, // Nombre de la persona que otorgó el servicio
    cliente:     { type: String}, // Nombre de la persona que recibió el servicio
    filename:    { type: String},
    path:        { type: String},
    originalname:{ type: String},
    imageURL:    { type: String},
    public_id:   { type: String},
    mimetype:    { type: String},
    size:        { type: Number},
    create_at:   { type: Date, default: Date.now()}
});

module.exports = model('image', imgschema)