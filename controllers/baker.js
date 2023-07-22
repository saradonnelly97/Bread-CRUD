const router = require('express').Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/bakerSeedData')

router.get('/data/seed', async (req, res) => {
    await Baker.deleteMany()
    await Baker.insertMany(bakerSeedData)
    res.redirect('/breads')
})

router.get('/', async (req, res) => {
    const bakers = await Baker.find().populate('breads')
    res.json(bakers)
})

module.exports = router