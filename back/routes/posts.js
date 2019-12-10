var express = require("express");
var { Post } = require("../db");
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
  const posts = await Post.find().exec();

  res.json(posts);
});

router.post("/", async function(req, res, next) {
  const post = new Post(req.body);

  await post.save();

  res.sendStatus(200);
});

module.exports = router;
