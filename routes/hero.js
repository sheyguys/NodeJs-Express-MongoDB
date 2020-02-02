var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const mongodb = require('monk')("localhost:27017/NodeJsDB");


/* GET user listing. */
router.get('/', function (req, res, next) {
  res.render('hero');
});

/* Add user */
router.get('/add', function (req, res, next) {
  res.render('addhero');
});

/* Add user */
router.post('/add', [
  check("name", "Please input your Hero Name.").not().isEmpty(),
  check("agi", "Please input your Hero Agility.").not().isEmpty(),
  check("str", "Please input your Hero Strength.").not().isEmpty(),
  check("int", "Please input your Hero Intelligence.").not().isEmpty(),
  check("description", "Please input your Hero Description.").not().isEmpty()
], function (req, res, next) {
  const response = validationResult(req);
  var errors = response.errors
  if (!response.isEmpty()) {
    res.render('addhero', { errors: errors });
  } else {
    //insert data to db
    var collection = mongodb.get('Heros');
    collection.insert({
      name: req.body.name,
      agility: req.body.agi,
      strength: req.body.str,
      intelligence: req.body.int,
      desscription: req.body.desscription
    }, function (err, hero) {
      if (err) {
        res.send(err);
      } else {
        res.location('/hero/add');
        res.redirect('/hero/add');
      }
    });
  }
});

module.exports = router;
