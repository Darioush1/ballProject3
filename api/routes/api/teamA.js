var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.locals.connection.query('SELECT * from teamA', function (error, results, fields) {
       if(error) throw error;
       res.send(JSON.stringify(results));
   })
});

// router.post('/', function(req, res, next) {
//     res.locals.connection.query('insert into teamA (name,email) values(''+req.body.name+'',''+req.body.email+'')', function (error, results, fields) {
//         if(error) throw error;
//         res.send(JSON.stringify(results));
//     });
// });

module.exports = router
