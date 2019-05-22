const db = require("../models");
require("dotenv").config();
const axios = require("axios");
var {google} = require('googleapis');
var service = google.youtube('v3');

var {OAuth2Client} = require("google-auth-library");
var client = new OAuth2Client(
  process.env.googleClientId
  );
var clientId = process.env.googleClientId;
var youtubeApiKey = process.env.youtubeApiKey;
var userid;
var userName;
var youtubeItems = [];

function youtubeAPI (accessToken) {
  console.log("accessToken " + accessToken)
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  "Bearer " + accessToken
    return config;
  });
  axios.get("https://www.googleapis.com/youtube/v3/search?", {
    params: {
      part: "snippet",
      forMine: true,
      key: youtubeApiKey,
      type: "video"
    }
  })
  .then(res => {
    youtubeItems = res.data.items;
    console.log(youtubeItems);
    })
  .catch(error => {console.log("error A" + error)})
}
 
async function verify(req, res) {
  const ticket = await client.verifyIdToken({
      idToken: req.body.idToken,
      audience: clientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  userid = payload["sub"];
  userName = payload["name"];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
  createUser(req, res);
  res.send({
    result: true,
    googleId: userid
  });
  if (req.body.role === "Normal User") {
    youtubeAPI(req.body.accessToken)
  }
}
createUser = (req, res) => {
  db.User
  .findOne({userGoogleId: userid})
  .then(dbModel => {
    if (dbModel === null) {
      db.User
        .create({
          userGoogleId: userid,
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
      .findByIdAndUpdate({_id: req.params._id}, {
        commentSummary: req.body.commentSummary,
        commentDetails: req.body.commentDetails,
        commentStatus: true
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findYoutubeVideo: function(req, res) {
    res.send(youtubeItems)
  }
};
