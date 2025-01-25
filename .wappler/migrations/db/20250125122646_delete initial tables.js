
exports.up = function(knex) {
  return knex.schema
    .dropTable('images')
    .dropTable('countries')
    .dropTable('cars')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('cars', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('make', 10);
      table.string('model', 12);
      table.integer('year');
    })
    .createTable('countries', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('country_code', 2);
      table.string('country_name', 38);
    })
    .createTable('images', async function (table) {
      table.increments('id').primary().notNullable().unique();
      table.string('image', 30);
      table.string('description', 20);
      table.string('category', 12);
      table.string('author', 18);
      table.date('date');
    })
};
