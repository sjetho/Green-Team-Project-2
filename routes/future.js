const express = require('express');
const router = express.Router();
router.get('/future', (req, res) => {
    res.render('future', {
        pageTitle: "future"
    });
});
module.exports = router;
