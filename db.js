const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: '040821',
    host: 'localhost',
    port: 5432,
    database: 'restapi'
});
module.exports = pool;