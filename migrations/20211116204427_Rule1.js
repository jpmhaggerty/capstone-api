
exports.up = function(knex) {
  return knex.schema.createTable('Rule1', table => {
      table.increments('id');
      table.text('name');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Rule1');
};
