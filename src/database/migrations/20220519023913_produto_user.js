/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("produto_user", function (table) {
        table.uuid("produto_id").notNullable(); 
        table
            .foreign("produto_id")
            .references("produto_id")
            .inTable("produto")
            .onDelete("cascade");

        table.uuid("user_id").notNullable(); 
        table
            .foreign("user_id")
            .references("user_id")
            .inTable("user")
            .onDelete("cascade");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("produto_user");
};
