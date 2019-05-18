const db = require("../models");
require("dotenv").config();
const axios = require("axios");

var {OAuth2Client} = require("google-auth-library");
var client = new OAuth2Client(
  process.env.googleClientId
  );
var clientId = process.env.googleClientId;
var userid;
var userName;


async function verify(req, res) {
  console.log(req.body.idToken);
  console.log(req.body.role)
  const ticket = await client.verifyIdToken({
      idToken: req.body.idToken,
      audience: clientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  oAuthToken = req.body.idToken;
  const payload = ticket.getPayload();
  userid = payload["sub"];
  userName = payload["name"];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
  createUser(req, res);
  res.send(true);
}

createUser = (req, res) => {
  db.User
  .findOne({googleId: userid})
  .then(dbModel => {
    if (dbModel === null) {
      db.User
        .create({
          googleId: userid,
          role: req.body.role,
          name: userName
        })
        .then(updatedDbModel => {
          dbModel = updatedDbModel
        })
        .catch(err => console.log(err))
    }    
  })
  .catch(err => res.status(422).json(err));
}

// Defining methods for the booksController
module.exports = {
  createUser: function(req, res) {
    verify(req, res).catch(console.error);
  },
  findVideos: function(req, res) {
    db.Video
      .find({userGoogleId: req.params.googleId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createVideos: function(req, res) {
    let youtubeUrl = "<iframe width='420' height='315' src=" + req.body.url + "></iframe>";
    req.body.url = youtubeUrl;
    db.Video
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteVideos: function(req, res) {
    db.Video
      .findById({ _id: req.params.videoId })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findNonCmt: function(req, res) {
    db.Video
      .find({commentStatus: false})
      .then(dbModel => {
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  createComments: function(req, res) {
    db.Video
      .findByIdAndUpdate({_id: req.params.googleId}, {
        commentSummary: req.body.commentSummary,
        commentDetails: req.body.commentDetails
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
