const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

productsRouter.get('/products', productsController.getProducts);
productsRouter.post('/products/add', productsController.addProduct);
productsRouter.patch('/products/edit', productsController.editProduct);
productsRouter.delete('/products/delete', productsController.deleteProduct);

module.exports = productsRouter;
