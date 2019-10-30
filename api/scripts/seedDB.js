const mongoose = require("mongoose");
const Stat = require("../models/Nbastat");
var allStats = [];


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Nbastat",
    {
      useMongoClient:true 
    }
  ).then(console.log("connected mongoose"));

  api.getPlayers().then(res => {
      allStats = res.data;
      console.log("It's been called", allStats)
    
  });
  console.log("Just chilling by itself ",allStats)

  Stat.allStats
  .remove({})
  .then(() => db.PlayerStat.collection.insertMany(allStats))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
