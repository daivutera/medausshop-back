const express = require('express');
const productsRouter = express.Router();

productsRouter.post('/', authController.loginUser);

module.exports = productsRouter;
