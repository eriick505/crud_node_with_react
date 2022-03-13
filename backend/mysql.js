const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 1000,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
});

const execute = (query, params = []) =>
  new Promise((resolve, reject) => {
    pool.query(query, params, (error, result, fields) => {
      if (error) return reject(error);

      resolve(result);
    });
  });

exports.execute = execute;
exports.pool = pool;
