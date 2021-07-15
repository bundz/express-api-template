const Joi = require('joi');

const bodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).required()
});

const route = async (req, res, next) => {
  
  res.body = { a: 1 };
  next();
}

module.exports = {
  route,
  bodySchema
};