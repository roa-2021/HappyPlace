
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('areas').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('areas').insert([
        {id: 10001, name: 'L-Couch kitchen corner', seating_cap: 7, available: true}, //id here links to booking
        {id: 10002, name: 'circle table cove', seating_cap: 4, available: true },
        {id: 10003, name: 'hanging plants couches', seating_cap: 5, available: true},
        {id: 10004, name: 'outdoor couch set', seating_cap: 9, available: true},
        {id: 10005, name: 'lecture room', seating_cap: 22, available: true}
      ]);
    // });
};
