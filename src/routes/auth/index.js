const router = require(`express`).Router();

router.post(`/signup`, require(`./signup`));
router.post(`/signin`, require(`./signin`));

module.exports = router;