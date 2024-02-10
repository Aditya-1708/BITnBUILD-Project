const Pool = require('pg').Pool;

const users = new Pool({
    user: "postgres",
    host: "localhost",
    database: "users",
    password: "Aditya170804!",
    port: 5432,
});

module.exports = {
    users,
    admins,
};
