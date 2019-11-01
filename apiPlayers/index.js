var express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const NBA = require("./routes/api/apiRoutes");
const axios = require("axios");
const PlayerStat = require("../apiPlayers/models/Nbastat");
var app = express();
var allStats= {};

router.get('/', function(req, res, next) {
  connection.query('SELECT * from members', function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json());

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/Nbastat",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// ).then(console.log("connected mongoose"));

// anything that has "app." all the following apps will have to /api/NBA
app.use('/api/NBA', NBA)
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
const port = process.env.PORT || 3003;

// function getPlayers() {
//   console.log("getPlayers called")
//   return axios.get("https://nba-players.herokuapp.com/players-stats").then((res) =>{
//     let tempStats= [];
//     tempStats = res;
//     console.log(tempStats);
//     return tempStats
//   }).catch(err => console.log(err))
// };

// function postAll(pStats) {
//   PlayerStat.create(pStats).then( stats => {
//     console.log("inside postAll", stats);
//   })
//   .catch(err => console.log(err))

// };

// function initializeDataBase() {
//   allStats = getPlayers();
//   postAll(allStats);
// };

// initializeDataBase();


app.listen(port, () => console.log(`Server statrted on ${port}`))

