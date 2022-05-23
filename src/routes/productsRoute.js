const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

productsRouter.get('/control', productsController.getProducts);
productsRouter.post('/control/add', productsController.addProduct);
productsRouter.post('/control/edit', productsController.editProduct);
productsRouter.delete('/control/delete', productsController.deleteProduct);

module.exports = productsRouter;
