
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogposts', function(table) {
    table.increments();
    table.string('username');
    table.string('title');
    table.string('body')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogposts');
};
