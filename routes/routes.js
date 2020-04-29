
var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index')
});

router.get('/home', function(req, res) {
  res.render('home')
});

router.get('/playlist', function(req, res) {
  res.render('playlist')
});

router.get('/titlepage', function(req, res) {
  res.render('titlepage')
});

module.exports = router;
