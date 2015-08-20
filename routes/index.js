var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Express' });
});
router.get('/mvc', function(req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

