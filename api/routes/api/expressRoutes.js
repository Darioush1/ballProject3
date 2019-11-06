var express = require('express');
var router = express.Router();

/* GET home page. */
//located at /api/stats/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;