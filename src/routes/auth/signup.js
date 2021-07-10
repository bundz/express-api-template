const route = (req, res, next) => {
  res.body = { a: 1 };
  next();
}

module.exports = route;