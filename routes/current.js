const express = require("express");
const router = express.Router();
// const db = require("../models/data.js");
let bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/current", (req, res) => {
  // res.render('current');
  db.query('SELECT * FROM "items"')
  .then(results => {
    //results is an array of objects
    console.log(results);
    res.render("current", {
      //render current page
      Items: results
    });
  });
});

router.post("/current", (req, res) => {
  let Itemname = req.body.Itemname;
  let category = req.body.category;
  let body = req.body.content;
  let imgURL = req.body.imgURL;
  let Amount = req.body.Amount;
  let Description = req.body.Description;
  db.none(
    "INSERT INTO list(Itemname, category, body, imgURL, Amount,Description) VALUES($1, $2, $3, $4, $5,$6)",
    [Itemname, category, body, imgURL, Amount, Description]
  )
    res.send('good sent')
    .then(() => {
      res.redirect("/current");
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;

