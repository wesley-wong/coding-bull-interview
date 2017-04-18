
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogposts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogposts').insert([
        {
          title: 'Hello',
          body: 'World1'
        },
        {
          title: 'Hello',
          body: 'World2'
        },
        {
          title: 'Hello',
          body: 'World3'
        }
      ]);
    });
};
