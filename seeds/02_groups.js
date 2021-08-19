
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('groups').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {id: 50005, group_size: 4}, // id here links to group
        {id: 50006, group_size: 4},
        {id: 50007, group_size: 4},
        {id: 50008, group_size: 4},
        {id: 50009, group_size: 4}
      ]);
    //});
};
