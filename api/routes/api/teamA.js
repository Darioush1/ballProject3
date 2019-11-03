var express = require('express');
var router = express.Router();


router.post("/", function (req, res) {
    db.Nbastat.findOne({
        where: {
            players: req.params.players
        }
    }).then(function (dbNbastat) {
        console.log(dbNbastat)
        var data = dbNbastat.dataValues
        var data = dbNbastat.dataValues
        db.TeamA.create({
            players: data.players,
            year: data.years,
            season: data.season,
            team: data.team,
            gp: data.gp,
            min: data.min,
            ppg: data.ppg,
            oreb: data.oreb,
            dreb: data.dreb,
            reb: data.reb,
            ast: data.ast,
            stl: data.stl,
            blk: data.blk,
            to: data.to,
            pf: data.pf,
            fgm: data.fgm,
            fga: data.fga,
            fg: data.fg,
            threePtm: data.threePtm,
            threePta: data.threePta,
            threePt: data.threePt,
            ftm: data.ftm,
            fta: data.fta,
            ft: data.ft
        })
    })
});

module.exports = router
