const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commenttSchema = new Schema({

    name:      { type: String, required: true },
    text:      { type: String, required: true },
    reference: { type: String, required: true },
    status:    { type: Number},
    date:      { type: Date, default: Date.now}

});
  
// Convertir a modelo
const comments = mongoose.model('comentarios',commenttSchema);
  
module.exports = comments;