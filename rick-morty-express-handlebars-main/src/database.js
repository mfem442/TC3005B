const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');

const pool = mysql.createPool(database);

//
//
//

// Create promises from callbacks
pool.query = promisify(pool.query);

module.exports = pool;

