const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/getVideo/:googleId"
router.route("/:googleId")
  .get(Controller.findVideos)

module.exports = router;
