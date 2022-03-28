const express = require('express')
const router = express.Router()
const chirpsStore = require('../chirpstore')

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id){
        res.json(chirpsStore.GetChirp(id))
    } else {
    res.send(chirpsStore.GetChirps())
    }
} )

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body)
    res.sendStatus(200)
})

module.exports = router

