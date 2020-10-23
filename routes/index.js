var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Task Manager' });
});
router.get('/about', function (req, res, next) {
    res.render('about', { message: 'Content from the controller goes here' });
});
router.get('/login', function (req, res, next) {
    res.render('login');
});
router.get('/register', function (req, res, next) {
    res.render('register');
});


module.exports = router;
