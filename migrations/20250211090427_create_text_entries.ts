import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('text_entries', (table) => {
        table.increments('id').primary();
        table.text('content').notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('text_entries');
}

