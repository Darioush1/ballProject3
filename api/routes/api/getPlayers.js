var express = require('express');
var router = express.Router();

/* GET users listing. */
//located at /api/data/
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from nbastats', function (error, results, fields) {
        if(error) throw error;
        if (!!results) {
            const players = results.map(x => x.Player);
            res.send(JSON.stringify(players));
        }
        else {
            res.send([]);
        }
	})
});


module.exports = router;