// const getPlayer = require("../../client/src/utils/API");
// const db = require("../models/Nbastat");
// const dbA = require("../models/TeamA");
// const dbB = require("../models/TeamB");

// const apiCall = getPlayer()

// module.exports = {
//     findAll: function (req, res) {
//         apiCall.then(
//             response => {
//                 db.Nbastat.collection.insertMany(response)
//             }
//         )
//         db.Nbastat.findAll({
            
//          }).then(function(dbNBA) {
//             console.log(dbNBA)
//             res.json(dbNBA)
//         })
//     },

//     getPlayerA: function (req, res) {
//         dbA.TeamA.findAll({
//         }).then(function (dbTeamA) {
//             console.log(db.TeamA)
//             res.json(dbTeamA);
//         });
//     },

//     getPlayerB: function (req, res) {
//         dbB.TeamB.findAll({
//         }).then(function (dbTeamB) {
//             console.log(db.TeamB)
//             res.json(dbTeamB);
//         });
//     },

//     getPlayer: function (req, res) {
//         db.Nbastat.findOne({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function (dbNbastat) {
//             res.json(dbNbastat);
//         });
//     },

//     savePlayer1: function (req, res) {
//         dbA.TeamA.create(req.body)
//             .then(TeamA => res.json(TeamA), console.log( "controllers called"))
//             .catch(err => res.status(422).json(err));
//     },

//     createPlayerB: function (req, res) {
//         dbB.TeamB.create(req.body)
//             .then(TeamB => res.json(TeamB))
//             .catch(err => res.status(422).json(err));
//     },

//     // Delete an example by id
//     deletePlayerA: function (req, res) {
//         dbA.TeamA.destroy({ where: {} }).then(function (dbTeamA) {
//             res.json(dbTeamA);
//         });
//     },

//     deletePlayerB: function (req, res) {
//         dbA.TeamB.destroy({ where: {} }).then(function (dbTeamB) {
//             res.json(dbTeamB);
//         });
//     }
// }