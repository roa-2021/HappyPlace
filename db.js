const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


const getGroups = (db = connection) => {
  return db('groups')
    .select('*', 'students.id as student_id')
    .join('students', 'students.group_id', 'groups.id')
}

const getAreas = (db = connection) => {
  return db('areas').select()
}


const makeBooking = (area_ID, group_ID, db = connection) => {
  const newBooking = {
    area_id: area_ID,
    group_id: group_ID
  }
  
  return db('bookings')
    .insert(newBooking)
}

const getMemebersGroupID = (memberName, db = connection) => {
  return db('students')
    .select('*')
    .where('students.name', 'like', `%${memberName}%`)
    .first()
}

const getGroupMembers = (groupID, db = connection) => {
  return db('groups')
    .select('*', 'students.id as students_ID')
    .join('students', 'groups.id', 'students.group_id')
    .where('groups.id', groupID)
}

module.exports = {
   getGroups,
   getAreas,
   makeBooking
  //  getGroupMembers,
  //  getBookings
   getGroupMembers,
   getMemebersGroupID
  }

