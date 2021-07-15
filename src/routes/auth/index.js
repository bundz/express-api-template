const router = require(`express`).Router();
const signup = require('./signup');
const Route = require('../../middlewares/route');
const Validate = require('../../middlewares/validate');

router.post(
  `/signup`, 
  Validate({ body: signup.bodySchema }),
  Route(signup.route),
  Sanitize(signup.responseSchema)
);

router.post(`/signin`, require(`./signin`));

module.exports = router;