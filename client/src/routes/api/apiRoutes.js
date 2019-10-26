const router = require('express');
const playerController = require("../../controller/playersController");

router.route("/")
    .get(playerController.findAll());

router.route("/currentPlayer/")
    .get(playerController.getPlayer);


module.exports = router;