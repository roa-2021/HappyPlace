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


// // getBookings
// let getBookings = (groupID, db = connection) => {
//   return db('bookings')
//   .select('*', 'bookings.id as id')
//   .join('bookings', 'bookings.id', 'groups_id')
// }

// getGroupMembers(50005)



module.exports = {
   getGroups,
   getAreas
  //  getGroupMembers,
  //  getBookings
  }

