const {verifyToken} = require('../Utils/validations');
const {User} = require('../Models/user.model');

module.exports = async (req, res, next) => {
  const validToken = verifyToken(req);
  if (!validToken) {
    return res.send({
      message: 'Unauthorized',
      code: 'failed_unauthentication',
    });
  }

  const user = await User.findOne({email: validToken.email});
  if (!user) {
    return res.send({
      message: 'Unauthorized',
      code: 'failed_unauthentication',
    });
  }

  req.user = user;
  next();
};
