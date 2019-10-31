import axios from "axios";

export default {
    getPlayers: function () {
        console.log("getPlayers called")
        return axios.get("https://nba-players.herokuapp.com/players-stats")
    },

    postAll: function () {
        console.log("Post all called?");
        return axios.post('/api/NBA');
    },

    get1: function () {
        console.log("get 1 called")
        return axios.get('/')
    },
 
    testPlayer1: function() {
        console.log("test")
        return axios.post('/api/NBA')
    },

    savePlayer1: function (TeamA) {
        return axios.post("/api/player1", TeamA)
    },

    savePlayer2: function(id) {
        return axios.post("/api/player2")
    },

    saveTeam1: function(id) {
        return axios.post("/api/team1")
    },

    saveTeam2: function() {
        return axios.post("/api/team2")
    }


};


