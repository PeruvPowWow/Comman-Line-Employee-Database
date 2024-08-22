const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_tracker',
    password: 'Chip@na0694!',
    port: 5432,
});

module.exports = pool;