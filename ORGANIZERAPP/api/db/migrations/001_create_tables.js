// 002_create_tables.js

exports.up = async function (knex) {
    await knex.schema.createTable('userdetails', function (table) {
        table.increments('id').primary();
        table.string('email').unique();
        table.string('password');
    })
    .createTable('userverification', function (table) {
        table.increments('id').primary();
        table.string('email');
        table.string('otp');
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('userdetails')
    .dropTableIfExists('userverification');
};
