const router = require('express').Router();
// ADD WITH AUTH IN UTILS
// const withAuth = require('../utils/auth');

router.get('/', function (req, res) {
    res.render('homepage');
})

module.exports = router;