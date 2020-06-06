// Codigo para el envio de emails
const nodemailer = require('nodemailer');

class Mailer{
  constructor() {
    //step number1
  this.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      // user: 'defrancodental@gmail.com',
      // pass: 'qwokfyxtipzqrval'
      user: 'jesusmiguelcoronalopez@gmail.com',
      pass: 'sufljsnopdredzcs'
      
    },
  });
}
}

module.exports = new Mailer();