var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new VideoSchema object
// This is similar to a Sequelize model
var VideoSchema = new Schema({
  // `body` is of type String
  userGoogleId : {
      type: String,
      required: true
  },
  videoId: {
      type: String,
      required: true,
      unique: true
  },
  commentSummary: {
      type: String,
      default: ""
  },
  commentDetails: {
      type: String,
      default: ""
  },
  commentStatus: {
      type: Boolean,
      default: false
  },
  instructorGoogleId: {
    type: String
  },
  payStatus: {
      type: Boolean,
      default: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Video = mongoose.model("Video", VideoSchema);

// Export the Video model
module.exports = Video;
