/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('plants', function(table) {
    table.increments('id').primary();
    table.string('plantName').notNullable();
    table.integer('userID').unsigned().notNullable();
    table.foreign('userID').references('users.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
