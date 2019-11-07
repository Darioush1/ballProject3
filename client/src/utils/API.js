import axios from "axios";

export default {
    getPlayers: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("/api/player1/", )
    },
 
    getPlayerA: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("/api/teamA/", )
    },

    savePlayer1: function (player1Stats) {
        
        return axios.post("/api/teamA/", player1Stats)
    },

    savePlayer2: function(player2Stats) {
        return axios.post("/api/teamB/", player2Stats)
    },

    clearTeam1: function (id) {
        return axios.delete("/api/teamA/", id)
    }
};


