const validate = (schema, data) => {
  const result = schema.validate(data, { stripUnknown: true });
  return result;
};

const sanitize = ({ body, query, params }) => async (req, res, next) => {

  if(body) {
    const { value, error } = validate(body, req.body);
    
  }

  const result = Joi.validate(res.body, schema, { stripUnknown: true });

  if (result.error) {
    return next(result.error);
  }

  return res.reply(result.value);
};

module.exports = sanitize;