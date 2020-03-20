var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var models = require("models")

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));



////generates results from json/////async function
// router.get('/api', async function (req, res) {
//    let results= await item.findall()
//     .then((results) => {
//         res.json(results)
//     })
// });

router.get("/api",(req,res) => {
    
})

/*
get the table (models -> item)
findAll() - returns a promise
.then(data) -> do something with it
respond with a json object of your items
*/



router.post('/api', async function (req, res) {
  
   
    let newItem = await item.create({
        categories:
            req.body.category, 
        amount:
            req.body.amount, 
        imageUrl:
            req.body.imageurl,
        Description:
            req.body.description,
        item_Name:
            req.body.item,
        UserId:
            req.body.user,
        updatedAt:
            new Date(),
        CreatedAt:
            new Date()
         });
    let results = await item.findall();
    res.json(results);//send info back to client


//same as api


    fs.writeFile(item.findall(), JSON.stringify(item.findall() ), 'utf8', function (err) {
        if (err) {
            console.log(err);
        }
    });
    res.json(item.findall() );
});


router.delete('/api/:id', async function (req, res) {
    let results = await  USER.findall().splice(req.params.id, 1);
    fs.writeFile('app/data/feedback.json', JSON.stringify(USER.findall() ), 'utf8', function (err) {
        if (err) {
            console.log(err);
        }
    });
    res.json(feedbackData);
});



module.exports = router;
