'use estrict'
const express = require('express')
const router = express.Router();

const Comment = require('../models/comments');

//Insertar un comentario
router.post('/api/comment/:id', async(req,res) =>{

  try {
    const reference = req.params.id
    const {name, text} = req.body;
    const status = 0
    const comentario  =  new Comment ({name, text, reference, status})
    console.log('[Datos del POST: ]',comentario)
    await comentario.save()
    .then(item => {
      res.send(200,'item saved to database')
    })
      .catch(err => {
       res.send(400,'unable to save to database',err)
      })
  } catch (error) {
    res.send(400,'unable to save to database')
  }
});

//Obtenet un comentario
router.get('/api/comment/:id', async(req,res) =>{

  try {
    const {id} = req.params
    console.log('el id es:',id)
    const comment = await Comment.find({
      status: 1,
      reference : id
    })
    res.json(comment);
    res.status(200).send('');
  } catch (error) {
    res.status(400).send(' ')
  }

})

// Exportacion de router
module.exports = router;