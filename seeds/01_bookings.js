exports.seed = function(knex) {
  return knex('bookings').insert([
    {id: 1, area_id: 10001, group_id: 50008},
    {id: 2, area_id: 10002, group_id: 50007},
    {id: 3, area_id: 10003, group_id: 50009},
    {id: 4, area_id: 10004, group_id: 50005},
    {id: 5, area_id: 10005, group_id: 50006},
  ])
}
