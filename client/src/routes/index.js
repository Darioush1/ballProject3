const path = require('path');
const router = require("express").Router();
const apiRoutes = require("./api");
const player1 = require("./routes/playerr1");
const player2 = require("./routes/plaer2");
const team1 = require("./routes/team1");
const team2 = require("./routes/team2");


router.use("/api", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
