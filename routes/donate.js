const express = require('express');
const router = express.Router();
router.get('/donate', (req, res) => {
    res.render('donate', {
        pageTitle: "donate"
    });
});
module.exports = router;
