const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
    //res.send("home page")
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
  console.log("/booking-summary", req.body)
  res.render('booking-summary')
})

router.post('/choose-room', (req, res) => {
  console.log("/choose-room", req.body)
  db.getAreas()
      .then((areas) => {
        res.render('choose-room', { areas })
      })
      .catch(err => res.status(500).send('Oh no! An error: ' + err.message))
  })

module.exports = router