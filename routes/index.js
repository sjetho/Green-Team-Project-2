const express = require('express');
const router = express.Router();
// router.get('/', (req, res) => {
//   res.render('index', {
//     pageTitle: "index"
//   });
// });






let bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  // res.render('current');
  db.query('SELECT * FROM "Users"')
    .then(results => {
      //results is an array of objects
      console.log(results);
      res.render("", {
        //render current page
        Users: results
      });
    });
});

router.post("/", (req, res) => {
  let name = req.body.name;
  let username = req.body.username;
  let body = req.body.content;
  let password = req.body.password;
  let address = req.body.address;
  db.none(
    "INSERT INTO Users(name, username, body, password, address) VALUES($1, $2, $3, $4, $5)",
    [name, username, body, password, address]
  )
  res.send('good sent')
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.send(err);
    });
});









module.exports = router;
