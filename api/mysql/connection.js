const mysql = require("mysql");
const express = require('express');
const app = express();
const connection = mysql.createConnection({
    host     : 'localhost',
    port    :3306,
    user     : 'root',
    password : 'RIPsonics9596',
    database : 'nba_stats'
});


connection.connect(function(err) {
    if (err) {
    console.log("erro in connection.js ",err)
    throw err;
    }
}
)

module.exports = connection