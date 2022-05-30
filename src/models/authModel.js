const mysql = require('mysql2/promise');
const { dbConfig } = require('../configDb');

async function userLoginDb(username) {
  try {
    console.log(dbConfig);
    const connection = await mysql.createConnection(dbConfig);
    console.log('prisijungiau s');
    const sql = `SELECT * FROM loginusers WHERE username=?`;
    const [dataFromDb] = await connection.execute(sql, [username]);
    await connection.close();
    return dataFromDb;
  } catch (error) {
    return false;
  }
}

module.exports = { userLoginDb };
