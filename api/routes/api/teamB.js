var express = require('express');
var router = express.Router();
const connection = require("../../mysql/connection");



router.get('/', function (req, res, next) {
    console.log('team B called!')
    connection.query('SELECT * from teamb', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    })
});

router.post('/', function (req, res, next) {
    let FGP = 'FG%'
    console.log(req.body.name.FGP, "post request for save1");
    res.locals.connection.query('INSERT INTO teamb (`Player`, `Year`, `Season`, `Team`, `GP`, `Min`, `PPG`, `Oreb`, `Dreb`, `Reb`, `Ast`, `Stl`, `Blk`, `TO`, `PF`, `FGM`, `FGA`, `FG%`, `3PTM`, `3PTA`, `3PT%`, `FTM`, `FTA`, `FT%`) VALUES ("' + req.body.name.Players + '", "' + req.body.name.Year + '", "' + req.body.name.Season + '", "' + req.body.name.Team + '", "' + req.body.name.GP + '", "' + req.body.name.Min + '", "' + req.body.name.PPG + '", "' + req.body.name.Oreb + '", "' + req.body.name.Dreb + '", "' + req.body.name.Reb + '", "' + req.body.name.Ast + '", "' + req.body.name.Stl + '", "' + req.body.name.Blk + '", "' + req.body.name.TO + '", "' + req.body.name.PF + '", "' + req.body.name.FGM + '", "' + req.body.name.FGA + '", "' + req.body.name.FGA + '", "' + req.body.name.Stl + '", "' + req.body.name.Blk + '", "' + req.body.name.FGA + '", "' + req.body.name.FTM + '", "' + req.body.name.FTA + '", "' + req.body.name.FGA + '");', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});




router.get('/', function(req, res, next) {
    res.locals.connection.query('DELETE from teamb where id = 1', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router
