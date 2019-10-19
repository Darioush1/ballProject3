const getPlayer = require("../utils/API");
const db = require("../models/Nbastat");

const apiCall = getPlayer()

module.exports = {
    findAll: function (req, res) {
        apiCall.then(
            response => {
                db.Nbastat.collection.insertMany(response)
            }
        )
        db.Nbastat.findAll({
            
         }).then(function(dbNBA) {
            console.log(dbNBA)
            res.json(dbNBA)
        })
    },

    getPlayerA = function (req, res) {
        db.TeamA.findAll({
        }).then(function (dbTeamA) {
            console.log(db.TeamA)
            res.json(dbTeamA);
        });
    },

    getPlayerB = function (req, res) {
        db.TeamB.findAll({
        }).then(function (dbTeamB) {
            console.log(db.TeamB)
            res.json(dbTeamB);
        });
    },

    getPlayer = function (req, res) {
        db.Nbastat.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbNbastat) {
            res.json(dbNbastat);
        });
    },

    createPlayerA: function (req, res) {
        db.TeamA.create(req.body)
            .then(TeamA => res.json(TeamA))
            .catch(err => res.status(422).json(err));
    },

    createPlayerB: function (req, res) {
        db.TeamB.create(req.body)
            .then(TeamB => res.json(TeamB))
            .catch(err => res.status(422).json(err));
    },

    // Delete an example by id
    deletePlayerA = function (req, res) {
        db.TeamA.destroy({ where: {} }).then(function (dbTeamA) {
            res.json(dbTeamA);
        });
    },

    deletePlayerB = function (req, res) {
        db.TeamB.destroy({ where: {} }).then(function (dbTeamB) {
            res.json(dbTeamB);
        });
    }
}