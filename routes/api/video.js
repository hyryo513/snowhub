const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/video"
router.route("/")
  .post(Controller.createVideos);

// Matches with "/api/video/:googleId"
router.route("/:googleId")
  .get(Controller.findVideos)
  .put(Controller.createComments)

// Matches with "/api/video/:id"
router.route("/:videoId")
  .delete(Controller.deleteVideos)

// Matches with "/api/video/noCmt"
router.route("/nocmt")
  .get(Controller.findNonCmt)


module.exports = router;
