const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require("../models");



router.get("/market", (req, res) => {
  res.render("market", {
    pageTitle: "market"
  });
});

module.exports = router