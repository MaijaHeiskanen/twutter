const MONGO_URL = process.env.MONGO_URL;

const mongoose = require("mongoose");
setTimeout(() => {
  mongoose.connect(MONGO_URL || "mongodb://mongodb/test", {
    useNewUrlParser: true
  });
}, 3000);

const Post = mongoose.model("Post", {
  name: String,
  textContent: String,
  date: Date
});

module.exports = { Post };
