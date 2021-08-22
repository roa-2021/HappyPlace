exports.seed = function(knex) {
  return knex('groups').insert([
    {id: 50005, group_size: 4},
    {id: 50006, group_size: 4},
    {id: 50007, group_size: 4},
    {id: 50008, group_size: 4},
    {id: 50009, group_size: 4}
  ])
}
