const mysql = require("mysql");
const express = require('express');
const app = express();

if(process.env.NODE_ENV === 'production') {
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host     : 'localhost',
        port    :3306,
        user     : 'root',
        password : 'bone1472',
        database : 'nba_stats'
    });
}



connection.connect(function(err) {
    if (err) {
    console.log("error in connection.js ",err)
    throw err;
    }
}
)

module.exports = connection