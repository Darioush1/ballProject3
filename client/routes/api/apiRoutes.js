const express = require("express");
const app = express.Router();
const PlayerStat = require("../../models/Nbastat");
// var playByPlay = require('nba-play-by-play');




  // located at api/NBA
  // initial call to the DB to get all the data
  app.post("/", (req,res) => {
    // const addStats = new PlayerStat({
    //   name: req.body
    // })
    PlayerStat.create(req.body).then(Playername => {
      console.log("inside create")
      res.json(Playername);
    })
    .catch(err => console.log(err))

  });

  // located at api/NBA
  //should get player stats
  app.get("/", (req, res) => {
    PlayerStat.find({})
      .then(Playername => {
        console.log("findOne = ", res.json(Playername));
        res.json(Playername);
      });
      //res.send(Playername=> json.parse(Playername));
      //.catch(err => console.log(err));
      
  });

  app.delete("/", (req,res) => {
    const addStats = new PlayerStat()
    addStats.save().then(PlayerStat => res.json(PlayerStat)).catch(err => (console.log(err)))
  });

//  api/NBA/player1
  app.post("/player1", (req,res) => {
    console.log(req, "inside apiRoutes.js", res);
  })

 


module.exports = app;
