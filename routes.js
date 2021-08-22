const express = require('express')
const db = require('./db')

const router = express.Router()

let usersName = ''
let usersGroupID = ''

const findMembersGroup = member => {
  db.getMemebersGroupID(member)
    .then(member => {
      const groupID = member.group_id
      console.log(groupID)

      db.getGroupMembers(groupID)
        .then(groupRAW => {
          const group = groupRAW.map(member => {
            if (member.name.includes(member)) {
              console.log("found!!")
              const booker = {
                ...member,
                name: "You!"
              }
            }
            return member
          })
          return group
        })
      return 
    })
    .catch(err => res.status(500).send('Oh no! An error: ' + err.message))
}

console.log(findMembersGroup("Jordan"))

router.get('/', (req, res) => {
   res.render('home')
})

router.post('/room-selection', (req, res) => {
  usersName = req.body.name
  db.getMemebersGroup(usersName)
    .then(usersGroup => {
      usersGroupID = usersGroup.group_id
    })

  db.getAreas()
    .then(areas => {
      res.render('room-selection', { areas })
    })
    .catch(err => res.status(500).send('Oh no! An error: ' + err.message))
})

router.post('/booking-summary', (req, res) => {
  const chosenRoom = req.body.room

  db.getArea(chosenRoom)
    .then(room => {
      db.makeBooking(room.id, usersGroupID)
        .then(bookingID => {
          console.log(`Booking made under ID: ${bookingID}`)
        })
    })
    .catch(err => res.status(500).send('Oh no! An error: ' + err.message))
  
  res.render('booking-summary')
})

module.exports = router