const mysql = require("mysql2");
require('dotenv').config();

let pool = mysql.createPool({
  host: "localhost",
  user: "dan",
  password: "MyNewPass1!",
  database: "mario",
  waitForConnections: true, 
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
