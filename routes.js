const express = require('express')
const db = require('./db')

const router = express.Router()

let usersName = ''
let usersGroupID = ''

const getMembersGroupSummary = membersName => {
  let outputGroup = {}

  db.getMemebersGroupInfo(membersName)
    .then(groupMember => {
      const groupID = groupMember.group_id

      db.getGroupMembers(groupID)
        .then(group => {
          outputGroup = group.map(groupMember => {
            if (groupMember.name.includes(membersName)) {
              const apptBooker = {
                ...groupMember,
                name: `You: ${groupMember.name}`
              }
              return apptBooker
            }
            return groupMember
          })
          // at this point if you console log outputGroup - it is the group that we need for the summary but with the requester of the booking having their name as "you!" for good user experience rather than just having their name. For some reason, I cant have that outputGroup passed down and out of the map function :(
          console.log(outputGroup)
          return null
        })
      // console.log(outputGroup)
      return
    })
    .catch(err => res.status(500).send('Oh no! An error: ' + err.message))
  // console.log(outputGroup)
  return outputGroup
}

console.log("func caller =", getMembersGroupSummary("Jordan"))


router.get('/', (req, res) => {
   res.render('home')
})

router.post('/room-selection', (req, res) => {
  usersName = req.body.name
  db.getMemebersGroupInfo(usersName)
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