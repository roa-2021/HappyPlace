const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


let getGroups = (db = connection) => {
  return db('groups')
    .select('*', 'students.id as student_id')
    .join('students', 'students.group_id', 'groups.id')
}

let getAreas = (db = connection) => {
  return db('areas').select()
}


let makeBooking = (area_ID, group_ID, db = connection) => {
  const newBooking = {
    area_id: area_ID,
    group_id: group_ID
  }
  return db('bookings').insert(newBooking)
}

// getBookings

// getGroupMemebers
// let getGroupMembers = (groupID, db = connection) => {
//   return db('groups')
//     .select('*', 'groups.id as id')
//     .where('id', groupID)

//     // get groups
//     // find right group
//     // join members
//     // return object with groupName and members maybe as array?
// }



// getGroupMembers(50005)



module.exports = {
   getGroups,
   getAreas,
   makeBooking
  //  getGroupMembers,
  //  getBookings
  }

