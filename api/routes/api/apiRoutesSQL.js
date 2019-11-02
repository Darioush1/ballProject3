var express = require('express');
var router = express.Router();
const connection = require("../../mysql/connection");


//http://localhost:3001/api/player1/
router.get('/', function(req, res, next) {
  console.log("router.get called before the query");
  connection.query('SELECT * from nbastats', function (error, results, fields) {
    
   if (error) {
    console.log("error in apiRoutes")
    throw error;
   }
   
   console.log("apiRoutes get from database ", JSON.stringify(results))
   res.send(JSON.stringify(results));
 });
});

module.exports = router;
  

  



  // app.post("/api/search/a/:players", function(req, res) {
  //   db.Nbastat.findOne({
  //     where: {
  //       players: req.params.players
  //     }
  //   }).then(function(dbNbastat) {
  //     console.log(dbNbastat)
  //     var data = dbNbastat.dataValues
  //     db.TeamA.create({
  //       players: data.players,
  //       year: data.years,
  //       season: data.season,
  //       team: data.team,
  //       gp: data.gp,
  //       min: data.min,
  //       ppg: data.ppg,
  //       oreb: data.oreb,
  //       dreb: data.dreb,
  //       reb: data.reb,
  //       ast: data.ast,
  //       stl: data.stl,
  //       blk: data.blk,
  //       to: data.to,
  //       pf: data.pf,
  //       fgm: data.fgm,
  //       fga: data.fga,
  //       fg: data.fg,
  //       threePtm: data.threePtm,
  //       threePta: data.threePta,
  //       threePt: data.threePt,
  //       ftm: data.ftm,
  //       fta: data.fta,
  //       ft: data.ft
  //     })
  //   });
  // });

  // app.post("/api/search/b/:players", function(req, res) {
  //   db.Nbastat.findOne({
  //     where: {
  //       players: req.params.players
  //     }
  //   }).then(function(dbNbastat) {
  //     console.log(dbNbastat)
  //     var data = dbNbastat.dataValues
  //     db.TeamB.create({
  //       players: data.players,
  //       year: data.years,
  //       season: data.season,
  //       team: data.team,
  //       gp: data.gp,
  //       min: data.min,
  //       ppg: data.ppg,
  //       oreb: data.oreb,
  //       dreb: data.dreb,
  //       reb: data.reb,
  //       ast: data.ast,
  //       stl: data.stl,
  //       blk: data.blk,
  //       to: data.to,
  //       pf: data.pf,
  //       fgm: data.fgm,
  //       fga: data.fga,
  //       fg: data.fg,
  //       threePtm: data.threePtm,
  //       threePta: data.threePta,
  //       threePt: data.threePt,
  //       ftm: data.ftm,
  //       fta: data.fta,
  //       ft: data.ft
  //     })
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });


  // // Delete an example by id
  // app.delete("/api/players/a", function(req, res) {
  //   db.TeamA.destroy({where: {}}).then(function(dbTeamA) {
  //     res.json(dbTeamA);
  //   });
  // });

  // app.delete("/api/players/b", function(req, res) {
  //   db.TeamB.destroy({ where: {}  }).then(function(dbTeamB) {
  //     res.json(dbTeamB);
  //   });
  // });
//};

