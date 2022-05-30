const express = require('express');
const authController = require('../controllers/authController');
const { validateUser } = require('../Middleware/middleware');

const authRouter = express.Router();

authRouter.post('/login', validateUser, authController.loginUser);

module.exports = authRouter;
