const Joi = require('joi');
const { verifyJwtToken, ErrorCase } = require('../Helpers/helpers');

async function validateUser(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
  });
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    console.log('error from joi', error);
    const formatedError = error.details.map((detail) => ({
      field: detail.context.key,
      message: detail.message,
      success: false,
    }));
    res.status(400).json({ formatedError, success: false });
  }
}

function validateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const tokenGotFromUser = authHeader && authHeader.split(' ')[1];
  if (!tokenGotFromUser) return ErrorCase(res, 'no token', 401);

  const verifyData = verifyJwtToken(tokenGotFromUser);
  if (verifyData === false)
    return ErrorCase(res, 'Your session expired, please login again', 403);
  req.userId = verifyData.id;
  next();
}

module.exports = { validateUser, validateToken };
