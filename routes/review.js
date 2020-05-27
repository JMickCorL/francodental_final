const express = require ('express');
const router = express.Router();
const images = require ('../models/image')

//Obtiene todos los Reviews
router.get('/api/Reviews', async(req,res) => {
    try {
        const rw = await images.find();
        res.json(rw)
        res.status(200).send('Obtenidos Correctamente: ');
    } catch (error) {
        res.status(400).send('Error: ', error)
    }    
})

//Obtiene un Review
router.get('/api/Reviews/:id', async (req,res) => {
    try {
        const {id} = req.params
        const rw = await images.findById(id)
        res.json(rw)
        res.status(200).send('Obtenidos Correctamente: ');
    } catch (error) {
        
    }
})

module.exports = router;