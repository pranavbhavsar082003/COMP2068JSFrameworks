// router objects = controllers
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { layout: "layout" });
});
/* GET about me */
router.get("/about", function(req, res, next) {
  res.render("about", { layout: "layout"});
});
/* GET projects. */
router.get("/projects", function(req, res, next) {
  res.render("projects", { layout: "layout" });
});
/* GET contact me. */
router.get("/contact", function(req, res, next) {
  res.render("contact", { layout: "layout" });
});
module.exports = router;
