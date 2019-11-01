import axios from "axios";

export default {
    getPlayers: function () {
        console.log("getPlayers called")
        return axios.get("https://nba-players.herokuapp.com/players-stats")
    },

    postAll: function (all) {

        console.log("Post all called?");
        return axios.post('http://localhost:3003/api/NBA/', all);
    },

    get1: function () {
        console.log("get 1 called")
        return axios.get('http://localhost:3003/api/NBA/', ).then(res => console.log("res of get1 ", res))
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


