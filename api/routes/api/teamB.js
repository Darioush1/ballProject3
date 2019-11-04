var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.locals.connection.query('SELECT * from nbastats', function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   })
});


module.exports = router
