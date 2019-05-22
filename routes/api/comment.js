const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/comment"
router.route("/")
  .get(Controller.findNonCmt)

// Matches with "/api/comment/:_id"
router.route("/:_id")
  .put(Controller.createComments)

module.exports = router;
