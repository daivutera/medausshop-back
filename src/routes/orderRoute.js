const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');

orderRouter.get('/control/orders', orderController.getOrders);
orderRouter.delete('/control/orders', orderController.deleteOrder);
orderRouter.post('/control/orders', orderController.addOrder);

module.exports = orderRouter;
