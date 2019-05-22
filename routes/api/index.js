const router = require("express").Router();
const userRoutes = require("./user");
const videoRoute = require("./video");
const getVideoRoute = require("./getVideo");
const youtubeRoute = require("./youtube");
const commentRoute = require("./comment");

// Book routes
router.use("/tokenSignin", userRoutes);
router.use("/video", videoRoute);
router.use("/getVideo", getVideoRoute);
router.use("/youtube", youtubeRoute);
router.use("/comment", commentRoute)

module.exports = router;
