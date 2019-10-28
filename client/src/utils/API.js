import axios from "axios";

export default {
    getPlayer: function () {
        
    console.log('works?');
        return axios.get("https://nba-players.herokuapp.com/players-stats")
    },

    getPlayer1: function (id) {
        console.log("player 1 id = ", id)
        return axios.get("/api/players" + id);
    },

    deletePlayer: function (id) {
        return axios.delete("/api/players" +  id)
    },

    savePlayer1: function (id) {
        return axios.post("/api/player1")
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


