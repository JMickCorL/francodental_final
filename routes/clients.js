'use estrict'
const express = require('express')
const router = express.Router();


const mailer = require('../mail')

// Importar modelo
const Nota = require('../models/clientes');


// Obtener todos
router.get('/content', async(req, res) =>{
  try {
    const content = await Nota.find();
    res.json(content);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


router.post('/api/email', (req,res) => {
  try {
    const {name,email,text,ln,phone, service} = req.body;

    console.log('[variable valor:]'+email)
    console.log('[variable valor:]'+name)
    console.log('[variable valor:]'+text)
    console.log('[variable valor:]'+service)
  
    const mailOptions = {
      from: email, // sender address
      to: 'defrancodental@gmail.com',// list of receivers
      subject: 'Solicitud de Cita', // Subject line
      text: text,
      html: '<h2>NOMBRE: '+name+' '+ln+' </h2> <br> <h2>EMAIL: '+email+' </h2><br><h2>TELÉFONO: '+phone+'</h2><br> <h2>SERVICIO: '+service+' <h2><br>DESCRIPCIÓN:'+text+'</h2></br>' ,//{path:'routes/email.html'}// plain text body
    };
    console.log(this.mailOptions)

    mailer.sendMail(mailOptions);
    res.status(200).send();
  } catch (error) {
    res.status(500).send('error al completar el proceso');
  }
});

// Exportacion de router
module.exports = router;