var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});

/* Add user */
router.get('/add', function(req, res, next) {
  res.send('Add User');
});

/* Edit user */
router.get('/update', function(req, res, next) {
  res.send('Add User');
});

/* Del user */
router.get('/delete', function(req, res, next) {
  res.send('Add User');
});

module.exports = router;
