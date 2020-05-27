const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({

  nombre: { type: String, required: [true, 'Nombre Obligatorio']},
  img:    { data: Buffer, contentType: String },
  date:   { type: Date, default: Date.now}

  });

// Convertir a modelo
const client = mongoose.model('cliente',clientSchema);

module.exports = client;