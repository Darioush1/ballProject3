// "use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var playByPlay = require('nba-play-by-play');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};


// Allows processing of game records

// let teamRecordRequest = playByPlay.getTeamRecord("Warriors", "2018-19", "Regular+Season");
// teamRecordRequest.then(record => {
//     console.log(record);
// });

console.log(playByPlay.getTeamId("Warriors"));
console.log(playByPlay.getTeamId("GSW"));



if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
    sequelize.query('select * from nbastats').then(function(rows) {
  //console.log(JSON.stringify(rows));
});
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
