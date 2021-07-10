const httpStatus = require('../utils/httpStatus');

const response = function(req, res, next) {
  if(!res.status) {
    res.status(httpStatus.SUCCESS);
  }

  if(!res.body) {
    res.body = { success: true };
  }

  return res.send();
};

module.exports = response;