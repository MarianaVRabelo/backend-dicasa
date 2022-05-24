/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', function (table) {
     table.uuid('user_id').primary().notNullable();
     table.string('name').notNullable();
     table.string('email').notNullable();
     table.string('firebase_id').notNullable;
     table.string('endereço').notNullable();
     table.string('cidade').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
