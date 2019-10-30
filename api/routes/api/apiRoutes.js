const router = require('express');
const playerController = require("../../controller/playersController");

router.route("/")
    .get(playerController.findAll());


module.exports = router;