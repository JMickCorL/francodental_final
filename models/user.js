const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaUser = new schema({

    user:   { type: String,  required: true },
    pass:   { type: String,  required: true },
    //status: { type: Boolean, required: true }
})

const usermodel = mongoose.model('user', schemaUser);

module.exports = usermodel;