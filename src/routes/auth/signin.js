const route = (req, res, next) => {
  res.body = { a: 1 };
  throw new Error('asda');
  next();
}

module.exports = route;