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

/* Add user */
router.post('/add', function(req, res, next) {
  console.log(req.body.name)
  console.log(req.body.agi)
  console.log(req.body.str)
  console.log(req.body.int)
  console.log(req.body.description)
});

module.exports = router;
