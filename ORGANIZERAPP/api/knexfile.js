module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'Aditya17!',
            database: 'users'
        },
        migrations: {
            directory: './db/migrations'
        }
    },
};
