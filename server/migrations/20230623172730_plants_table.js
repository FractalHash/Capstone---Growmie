/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('plants', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('stage_of_life').notNullable();
    table.string('growing_medium').notNullable();
    table.string('growing_environment').notNullable();
    table.string('nutrients').notNullable();
    table.dateTime('start_date').notNullable();
    table.date('harvest_date').notNullable();
    table.string('color').notNullable();
    table.string('user_email').notNullable().references('email').inTable('users').onDelete('CASCADE');
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('plants');
};
