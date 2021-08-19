const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
    //res.send("home page")
   res.render('home')
})



module.exports = router