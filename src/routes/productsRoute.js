const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsControllerr');
const { validateToken } = require('../Middleware/middleware');

productsRouter.get('/products', productsController.getProducts);
productsRouter.post(
  '/products/add',
  validateToken,
  productsController.addProduct
);
productsRouter.patch(
  '/products/edit',
  validateToken,
  productsController.editProduct
);
productsRouter.delete(
  '/products/delete',
  validateToken,
  productsController.deleteProduct
);

module.exports = productsRouter;
