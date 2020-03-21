var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var fs = require("fs");
var models = require("../models");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

////generates results from json/////async function


router.get("/api", (req, res) => {
  models.items
    .findAll()
    .then(data => {
      console.log(data);
      res.status(200).json({ message: "You did the thing!" });
    })
    .catch(err => {
      console.error(err);
      return res.status(502).json({ error: err });
    });
});

/*
route.post("/test", (req, res) => {
    let email = req.params.email,
     name = req.body.name,
     phone = req.body.phone


    let newUser = models.Test.build({
        email: email,
        name: req.body.name
    });

    newUser.save().then(() => {
        // the below will return a status of 200 (Server is Good to Go!) as well as a json message (New user stuff)
        res.status(200).json({message: "New user has been created"})
        //CAN ONLY SEND ONE RESPONSE FROM SERVER!
        
        // send a json message and redirect to different page
        res.status(200).redirect("/login")

    })
})
*/
// get the table (models -> item)
// findAll() - returns a promise
// .then(data) -> do something with it
// respond with a json object of your items

router.post("/api", async function(req, res) {
  let newItem = await item.create({
    categories: req.body.category,
    amount: req.body.amount,
    imageUrl: req.body.imageurl,
    Description: req.body.description,
    item_Name: req.body.item,
    UserId: req.body.user,
    updatedAt: new Date(),
    CreatedAt: new Date()
  });
  let results = await item.findall();
  res.json(results); //send info back to client

  //same as api


  

  fs.writeFile(item.findall(), JSON.stringify(item.findall()), "utf8", function(
    err
  ) {
    if (err) {
      console.log(err);
    }
  });
  res.json(item.findall());
});

router.delete("/api/:id", async function(req, res) {
  let results = await USER.findall().splice(req.params.id, 1);
  fs.writeFile(
    "app/data/feedback.json",
    JSON.stringify(USER.findall()),
    "utf8",
    function(err) {
      if (err) {
        console.log(err);
      }
    }
  );
  res.json(feedbackData);
});

module.exports = router;
