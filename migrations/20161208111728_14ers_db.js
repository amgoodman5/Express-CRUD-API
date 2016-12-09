
exports.up = function(knex, Promise) {
  return knex.schema.createTable('14er_db', function(table){
    table.increments();
    table.string('name');
    table.integer('altitude');
    table.string('text');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('14er_db');
};
