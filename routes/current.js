const express = require('express');
const router = express.Router();
router.get('/current', (req, res) => {
    res.render('current', {
        pageTitle: "current"
    });
});
module.exports = router;
