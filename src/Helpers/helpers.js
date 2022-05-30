require('dotenv').config();
const jwt = require('jsonwebtoken');

function SuccessCase(res, data, status = 200) {
  res.status(status).json({
    success: true,
    data,
  });
}

function ErrorCase(res, message = 'error with db function', status = 500) {
  res.status(status).json({
    success: false,
    message,
  });
}

function generateJwtToken(userObj) {
  const jwtSecret = process.env.JWT_SECRET;
  return jwt.sign({ id: userObj.id }, jwtSecret, { expiresIn: '1h' });
}

function verifyJwtToken(token) {
  const jwtSecret = process.env.JWT_SECRET;

  try {
    const payload = jwt.verify(token, jwtSecret);
    return payload;
  } catch (err) {
    return false;
  }
}
module.exports = { SuccessCase, ErrorCase, generateJwtToken, verifyJwtToken };
