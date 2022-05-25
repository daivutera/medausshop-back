const mysql = require('mysql2/promise');
const { dbConfig } = require('../configDb');
require('dotenv').config();

async function getProductsDb() {
  try {
    console.log(dbConfig);
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM products`;
    const [data] = await connection.query(sql);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function deleteProductDb(productId) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `DELETE FROM products WHERE product_id=? LIMIT 1`;
    const [data] = await connection.execute(sql, [productId]);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function editProductDb(productId, arrOfFields) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `UPDATE products
    SET ${arrOfFields.map(
      (oneColumn) => oneColumn.name + ' = ' + oneColumn.value
    )} 
    WHERE product_id=?`;
    console.log(sql, 'sql');
    const [data] = await connection.execute(sql, [productId]);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function addProductDb(
  name,
  quantity_in_stock,
  price,
  foto_url,
  quantity_kg
) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO products (name, quantity_in_stock, price, foto_url, quantity_kg) VALUES(?,?,?,?,?)`;
    const [data] = await connection.execute(sql, [
      name,
      quantity_in_stock,
      price,
      foto_url,
      quantity_kg,
    ]);
    await connection.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  getProductsDb,
  deleteProductDb,
  editProductDb,
  addProductDb,
};
