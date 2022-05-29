const mysql = require('mysql2/promise');
const { dbConfig } = require('../configDb');
require('dotenv').config();

async function getOrdersDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM orders`;
    const [data] = await connection.query(sql);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function deleteOrderDb(orderId) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `DELETE FROM orders WHERE id=? LIMIT 1`;
    const [data] = await connection.execute(sql, [orderId]);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addOrderDb(
  juridinis,
  amount,
  amount_total_EUR,
  product_id,
  product_name,
  send_to,
  email
) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO orders (juridinis,
      amount,
      amount_total_EUR,
      product_id,
      product_name,
      send_to,
      email) VALUES(?,?,?,?,?,?,?)`;
    const [data] = await connection.execute(sql, [
      juridinis,
      amount,
      amount_total_EUR,
      product_id,
      product_name,
      send_to,
      email,
    ]);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addClientFizinisDb(
  name,
  surname,
  adresas,
  miestas,
  el_pastas,
  tel
) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO clients ( name,
      surname,
      adresas,
      miestas,
      el_pastas,
      tel) VALUES(?,?,?,?,?,?)`;
    const [data] = await connection.execute(sql, [
      name,
      surname,
      adresas,
      miestas,
      el_pastas,
      tel,
    ]);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addClientJuridinisDb(
  imones_kodas,
  pvm_kodas,
  imones_pav,
  adresas,
  miestas,
  el_pastas,
  tel
) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO business_clients (imones_kodas,
      pvm_kodas,
      imones_pav,
      adresas,
      miestas,
      el_pastas,
      tel) VALUES(?,?,?,?,?,?,?)`;
    const [data] = await connection.execute(sql, [
      imones_kodas,
      pvm_kodas,
      imones_pav,
      adresas,
      miestas,
      el_pastas,
      tel,
    ]);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
module.exports = {
  getOrdersDb,
  deleteOrderDb,
  addOrderDb,
  addClientFizinisDb,
  addClientJuridinisDb,
};
