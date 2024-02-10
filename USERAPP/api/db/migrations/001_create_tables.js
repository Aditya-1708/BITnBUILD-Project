exports.up = async function (knex) {
    await knex.schema.createTable('userdetails', function(table) {
        table.increments('id').primary();
        table.string('email').unique();
        table.string('password');
        table.string('phoneno');
        table.integer('location');
        table.integer('badgesnum');
        table.specificType('badges', 'TEXT[]');
        table.integer('pointsnum');
        table.specificType('events_attended', 'TEXT[]');
        table.integer('eventsnum');
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
