const express = require("express");
const app = express.Router();
const Stat = require("../../models/Nbastat");
// var playByPlay = require('nba-play-by-play');

app.get('/')

module.exports = function(app) {
  // Get all examples

  //api/NBA
  app.post("/allStats", (req,res) => {
    const addStats = new Stat({
      name: this.state.data.name,
    })
    addStats.save().then(stat => res.json(stat))
  });

  app.get("/allStats", (req,res) => {
    Stat.find()
      .then(player => res.json(player) )
  });

  app.delete("/", (req,res) => {
    const addStats = new Stat()
    addStats.save().then(stat => res.json(stat))
  });

//  api/NBA/player1
  app.post("/player1", (req,res) => {
    console.log(req, "inside apiRoutes.js", res);
  })

 
};

