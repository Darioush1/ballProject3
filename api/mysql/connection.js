const mysql = require("mysql");
const express = require('express');
const app = express();
const connection = mysql.createConnection({
    host     : process.env.JAWSDB_URL || 'localhost',
    port    :3306,
    user     : 'root',
    password : 'bone1472',
    database : 'nba_stats'
});


connection.connect(function(err) {
    if (err) {
    console.log("error in connection.js ",err)
    throw err;
    }
}
)

module.exports = connection