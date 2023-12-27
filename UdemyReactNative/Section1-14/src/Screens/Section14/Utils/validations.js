const {User} = require('../Models/user.model');
const jwt = require('jsonwebtoken');

const userExisted = async email => {
  const existingUser = await User.findOne({email});

  return existingUser ? true : false;
};

const invalidPassword = password => {
  const passwordInvalid = password.length < 8;

  return passwordInvalid;
};

const verifyToken = req => {
  const creds = req.headers['authorization'];
  const token = creds.split(' ')[1];

  const validUser = jwt.verify(token, process.env.ACCESS_TOKEN);
  return validUser;
};

module.exports = {
  userExisted,
  invalidPassword,
  verifyToken,
};
