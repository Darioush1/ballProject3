const path = require('path');
const router = require("express").Router();
const apiRoutes = require("./api");


router.use("/api", apiRoutes);

const player1 = require("./routes/player1");
const player2 = require("./routes/plaer2");
const team1 = require("./routes/team1");
const team2 = require("./routes/team2");

router.use("./routes/player1", player1);
router.use("./routes/player2", player2);
router.use("./routes/team1", team1);
router.use("./routes/team2", team2);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
