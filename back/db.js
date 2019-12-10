const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

const Post = mongoose.model("Post", {
  name: String,
  textContent: String,
  date: Date
});

modules.exports = { Post };
