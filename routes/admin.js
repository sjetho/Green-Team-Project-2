const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => { // on "website.com/donate - display"
    res.render('admin', { // renders the page
        pageTitle: "admin"
    });
});

module.exports = router;
