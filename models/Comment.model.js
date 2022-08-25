const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
 username: String,
 text: String,
 newsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News",
  }
 

});

const Comment = mongoose.model('Comment', categorySchema);

module.exports = Comment;