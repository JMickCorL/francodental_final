// Codigo para el envio de emails
const nodemailer = require('nodemailer');

class Mailer{
  constructor() {
    //step number1
  this.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'defrancodental@gmail.com',
      pass: 'qwokfyxtipzqrval'
    },
  });

  
  //step number 2
  this.mailOptions = {
    from: 'defrancodental@gmail.com'
  }
}

//step number 3
  sendMail(options) {
    const mailOptions = {
      ...this.mailOptions,
      ...options
    }
    this.transporter.sendMail(mailOptions, (error, info) =>{
      if (error) {
        return console.log(error)
      }
      console.log('Mensaje enviado: %s', info.messageId);
    });
  }
}

module.exports = new Mailer();