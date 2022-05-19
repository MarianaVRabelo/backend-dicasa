/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('produto', function (table) {
        table.uuid('produto_id').primary().notNullable();
        table.string('titulo').notNullable();
        table.string('valor').notNullable();
        table.string('imagem').notNullable();
     });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("produto");
};
