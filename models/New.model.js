const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  header: String,
  text: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  }

  
});

const News = mongoose.model('News', newsSchema);

module.exports = News;