const path = require("path");
const router = require('express').Router();
const api = require("./api");

// if the api route doesnt exist then send it back to home page.

router.use((req, res) =>
 res.sendFile(path.join(__dirname, '../client/public/index.html'))
);




router.use('/', router)
// router.use('/instructor', api)