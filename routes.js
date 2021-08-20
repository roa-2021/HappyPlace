const express = require('express')
const router = express.Router()

// const db = require('./db')

router.get('/', (req, res) => {
    //res.send("home page")
   res.render('home')
})

router.post('/choose-room', (req, res) => {
  console.log(req.body)
    res.render('choose-room')
})




// router.get('/groups', (req, res) => {
//     db.getGroups()
//       .then(groups => {
//         res.render('groups', { groups: groups })
//         return null
//       })
//       .catch(err => {
//         res.status(500).send('DATABASE ERROR: ' + err.message)
//       })
// })

router.get('/booking-summary', (req, res) => {
  res.render('booking-summary')
})

// router.get('/choose-room'', (req, res) => {
//     db.getAllAreas()
//       .then((areas) => {
//         console.log(areas)
//         res.render('choose-room', { areas })
//       })
//       .catch(err => res.status(500).send('Oh no! An error: ' + err.message))
//   })

module.exports = router