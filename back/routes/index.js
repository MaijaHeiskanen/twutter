var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  // Just some debugging to see if the backend is running.
  res.json("AAAAA");
});

module.exports = router;
