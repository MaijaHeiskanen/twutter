var express = require("express");
var { Post } = require("../db");
var router = express.Router();

router.get("/", async function(req, res, next) {
  const posts = await Post.find()
    .sort({ date: -1 })
    .exec();

  res.json(posts);
});

router.post("/", async function(req, res, next) {
  const post = new Post(req.body);

  await post.save();

  res.sendStatus(200);
});

module.exports = router;
