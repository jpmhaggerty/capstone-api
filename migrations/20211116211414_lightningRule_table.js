
exports.up = function(knex) {
    return knex.schema.createTable('lightning_rule', table => {
        table.increments('id');
        table.string('constraint_name').notNullable();
        table.bigInteger('constraint_parameter_integer');
        table.boolean('constraint_parameter_boolean');
        table.bigInteger('user_input_integer');
        table.boolean('user_input_boolean')
     })
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lightning_rule')
  };
