const Pool = require('pg').Pool;

const users = new Pool({
    user: "postgres",
    host: "localhost",
    database: "users",
    password: "Aditya17!",
    port: 5432,
});

module.exports = {
    users,
};
