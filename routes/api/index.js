const router = require("express").Router();
const userRoutes = require("./user");
const videoRoute = require("./video");

// Book routes
router.use("/tokenSignin", userRoutes);
router.use("/video", videoRoute);

module.exports = router;
