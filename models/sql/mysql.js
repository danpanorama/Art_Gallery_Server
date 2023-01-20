const mysql = require("mysql2");
require('dotenv').config();

let pool = mysql.createPool({
  host: "localhost",
  user: "samiacoi_mario",
  password: "danielmorcos1",
  database: "samiacoi_mario",
  waitForConnections: true, 
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
