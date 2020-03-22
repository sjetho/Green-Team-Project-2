const express = require('express');
const router = express.Router();
// router.get('/donate', (req, res) => {
//     res.render('donate', {
//         pageTitle: "donate"
//     });
// });
// module.exports = router;





let bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/donate", (req, res) => {
    // res.render('donate');
    db.query('SELECT * FROM "Donations"')
        .then(results => {
            //results is an array of objects
            console.log(results);
            res.render("donate", {
                //render donate page
                Donations: results
            });
        });
});

router.post("/donate", (req, res) => {
    let UserID = req.body.UserID;
    let amount_donated = req.body.amount_donated;
    let body = req.body.content;
    let item_donated = req.body.item_donated;

    db.none(
        "INSERT INTO list(Itemname, category, body, imgURL, Amount,Description) VALUES($1, $2, $3, $4)",
        [UserID, amount_donated, body, item_donated]
    )
    res.send('good sent')
        .then(() => {
            res.redirect("/donate");
        })
        .catch(err => {
            res.send(err);
        });
});
