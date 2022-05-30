const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');
const { validateToken } = require('../Middleware/middleware');

orderRouter.get('/control/orders', validateToken, orderController.getOrders);
orderRouter.delete(
  '/control/orders',
  validateToken,
  orderController.deleteOrder
);
orderRouter.post('/control/orders', orderController.addOrder);
orderRouter.post('/control/fiziniai', orderController.addClientFizinis);
orderRouter.post('/control/juridiniai', orderController.addClientJuridinis);

module.exports = orderRouter;
