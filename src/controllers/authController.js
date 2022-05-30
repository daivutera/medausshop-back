const {
  ErrorCase,
  SuccessCase,
  generateJwtToken,
} = require('../Helpers/helpers');
const { userLoginDb } = require('../models/authModel');

async function loginUser(req, res) {
  console.log('controlerisf');
  const { username, password } = req.body;
  console.log(username, password);
  const users = await userLoginDb(username);

  if (users === false) {
    ErrorCase(res);
    return;
  }
  if (!users.length) {
    return ErrorCase(res, 'password or username does not match 1');
  }
  const foundUserObj = users[0];
  if (foundUserObj.password === password) {
    const token = generateJwtToken(foundUserObj);
    SuccessCase(res, token);
  } else {
    return ErrorCase(res, 'password or username does not match 2');
  }
}

module.exports = { loginUser };
