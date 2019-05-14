const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/tokenSignin"
router.route("/")
  .post(Controller.createUser);

module.exports = router;
