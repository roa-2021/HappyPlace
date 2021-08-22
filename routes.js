const express = require('express')
const db = require('./db')

const router = express.Router()


router.get('/', (req, res) => {
   res.render('home')
})

router.post('/room-selection', (req, res) => {
  usersName = req.body.name

  db.getAreas()
    .then(areas => {
      res.render('room-selection', { areas })
    })
    .catch(err => res.status(500).send('Oh no! An error: ' + err.message))
})

router.post('/booking-summary', (req, res) => {
  chosenRoom = req.body.room

  res.render('booking-summary')
})

module.exports = router