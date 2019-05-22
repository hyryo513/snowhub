const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/youtube"
router.route("/")
  .get(Controller.findYoutubeVideo);

module.exports = router;
