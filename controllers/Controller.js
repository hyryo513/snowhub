const db = require("../models");
require("dotenv").config();
const axios = require("axios");

var {OAuth2Client} = require("google-auth-library");
var client = new OAuth2Client(
  process.env.googleClientId,
  process.env.googleClientSecret,
  process.env.googleRedirect_Uri
  );
var clientId = process.env.googleClientId;
var youtubeApiKey = process.env.youtubeApiKey;
var userid;
var userName;
var userRole;
var youtubeItems = [];
let axiosInterceptor = null;

function youtubeAPI (accessToken) {
  if (!!axiosInterceptor || axiosInterceptor === 0) {
    axios.interceptors.request.eject(axiosInterceptor);
  };
  axiosInterceptor = axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  "Bearer " + accessToken;
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
    console.log("here");
    youtubeItems = [];
    youtubeItems = res.data.items;
    })
  .catch(error => {console.log(error)})
};
 
async function verify(req, res) {

  const code = req.body.code
  const verifiedToken = await client.getToken({code: code});
  console.log(verifiedToken); 
  const ticket = await client.verifyIdToken({
      idToken: verifiedToken.tokens.id_token,
      audience: clientId
  });
  const payload = ticket.getPayload();
  userid = payload["sub"];
  userName = payload["name"];
  userRole = req.body.role;
  if (userRole === "Normal User") {
    await youtubeAPI(verifiedToken.tokens.access_token);
  }
  await createUser(req, res);
  res.send({
    result: true,
    googleId: userid
  });
};
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
