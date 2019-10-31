const express = require("express");
const app = express.Router();
const PlayerStat = require("../../models/Nbastat");
// var playByPlay = require('nba-play-by-play');




  // Get all examples

  // located at api/NBA
  // initial call to the DB to get all the data
  app.post("/", (req,res) => {
    const addStats = new PlayerStat({
      name: req.body.name
    })
    addStats.save().then(PlayerStat => res.json(PlayerStat))
  });

  // located at api/NBA
  app.get("/", (req,res) => {
    PlayerStat.find()
      .then(PlayerStat => res.json(PlayerStat) )
  });

  app.delete("/", (req,res) => {
    const addStats = new PLayerStat()
    addStats.save().then(PlayerStat => res.json(PlayerStat))
  });

//  api/NBA/player1
  app.post("/player1", (req,res) => {
    console.log(req, "inside apiRoutes.js", res);
  })

 


module.exports = app;
