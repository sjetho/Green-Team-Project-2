const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let db = require('../models');

router.use(bodyParser.urlencoded({ extended: false }));


///parese json///
router.use(bodyParser.json())


///get all items//////
router.get("/current", (req, res) => {
db.items.FindAll()
.then(items => res.send(items))
});

/////done/////////


////get item by id//////
router.get("/current/:id", (req, res) => {
  db.items.FindAll({
    where: {
      id: req.params.id
    }
  }).then(items => res.send(items));
});
/////////done//////


////post new item//////

router.post("/current", (req, res) =>{
  let newItem = db.items.create({
    categories: req.body.category,
    amount: req.body.amount,
    imageUrl: req.body.imageurl,
    Description: req.body.description,
    item_Name: req.body.item,
    UserId: req.body.user,
    updatedAt: new Date(),
    CreatedAt: new Date()
  }).then(submitedItem => res.send(submitedItem))
});


////done////

///deltel item//////

router.get("/current/:id", (req, res) => {
  db.items.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send("worked"));
});






/////old code//////////

// router.get("/current", (req, res) => {
//   // res.render('current');
//   db.query('SELECT * FROM "items"')
//   .then(results => {
//     //results is an array of objects
//     console.log(results);
//     res.render("current", {
//       //render current page
//       Items: results
//     });
//   });
// });

// router.post("/current", (req, res) => {
//   let Itemname = req.body.Itemname;
//   let category = req.body.category;
//   let body = req.body.content;
//   let imgURL = req.body.imgURL;
//   let Amount = req.body.Amount;
//   let Description = req.body.Description;
//   db.none(
//     "INSERT INTO list(Itemname, category, body, imgURL, Amount,Description) VALUES($1, $2, $3, $4, $5,$6)",
//     [Itemname, category, body, imgURL, Amount, Description]
//   )
//     res.send('good sent')
//     .then(() => {
//       res.redirect("/current");
//     })
//     .catch(err => {
//       res.send(err);
//     });
// });
//////////////////////
module.exports = router;

