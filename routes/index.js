var express = require('express');
var router = express.Router();
var story = require("../story.js")


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', story: story});
});

module.exports = router;
