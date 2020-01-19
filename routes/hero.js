var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function(req, res, next) {
  res.render('hero');
});

/* Add user */
router.get('/add', function(req, res, next) {
  res.render('addhero');
});

/* Edit user */
router.get('/update', function(req, res, next) {
  res.send('Add Hero');
});

/* Del user */
router.get('/delete', function(req, res, next) {
  res.send('Add Hero');
});

module.exports = router;
