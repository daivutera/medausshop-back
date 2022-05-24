const { ErrorCase, SuccessCase } = require('../helpers/helpers');
const {
  getProductsDb,
  deleteProductDb,
  editProductDb,
  addProductDb,
} = require('../models/productsModel');

async function getProducts(req, res) {
  const data = await getProductsDb();
  if (data === false) {
    ErrorCase(res);
    return;
  }
  if (!data.length) {
    return ErrorCase(res, 'Everything is sold out. Please come back later.');
  }
  SuccessCase(res, data);
}
async function deleteProduct(req, res) {
  const productId = req.body.product_id;
  const data = await deleteProductDb(productId);
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}
async function editProduct(req, res) {
  const productId = req.body.product_id;
  const arrWithUpdatedInfo = req.body.updatedInfoArr;
  const data = await editProductDb(productId, arrWithUpdatedInfo);
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}
async function addProduct(req, res) {
  const { name, quantity_in_stock, price, foto_url, quantity_kg } = req.body;
  const data = await addProductDb(
    name,
    quantity_in_stock,
    price,
    foto_url,
    quantity_kg
  );
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}

module.exports = { getProducts, deleteProduct, editProduct, addProduct };
