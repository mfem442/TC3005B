const express = require('express');
const router = express.Router()

router.get('/', async (req, res) => {
    res.render('index.hbs')
})

module.exports = router
