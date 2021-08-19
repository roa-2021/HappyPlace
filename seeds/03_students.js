
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('students').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 101, name: 'Alex-James', group_id: 50007}, //link to groups id
        {id: 102, name: 'Alex-Thompson', group_id: 50005},
        {id: 103, name: 'Anand-Ghyar', group_id: 50007},
        {id: 104, name: 'Casey-Davies-Bell', group_id: 50006},
        {id: 105, name: 'Gordon-Fong', group_id: 50007},
        {id: 106, name: 'Jo-Tregidga', group_id: 50005},
        {id: 107, name: 'Jordan-Cooper', group_id: 50008},
        {id: 108, name: 'Juliet-Black', group_id: 50007},
        {id: 109, name: 'Kang-Gao', group_id: 50008},
        {id: 110, name: 'Kho-Thach', group_id: 50006 },
        {id: 111, name: 'Matt-Searle', group_id:50008 },
        {id: 112, name: 'Matthew-Hocking', group_id: 50009},
        {id: 113, name: 'Max-B', group_id:50009},
        {id: 114, name: 'Oscar-Holt', group_id: 50009},
        {id: 115, name: 'Patrick-Sullivan', group_id: 50009},
        {id: 116, name: 'Phil-Mutu', group_id: 50008 },
        {id: 117, name: 'Romina-Mautone', group_id: 50005},
        {id: 118, name: 'Shabu-Shrestha', group_id: 50005},
        {id: 119, name: 'Tim-Soikie', group_id: 50006},
        {id: 120, name: 'Zoe-Joblin', group_id: 50006},
        ]);
    //});
};
