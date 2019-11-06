import axios from "axios";

export default {
    getPlayers: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("http://localhost:3001/api/player1/", )
    },
 
    

    savePlayer1: function (player1Stats) {
        
        return axios.post("http://localhost:3001/api/teamA/", player1Stats)
    },

    savePlayer2: function(player2Stats) {
        return axios.post("http://localhost:3001/api/teamB/", player2Stats)
    },

    saveTeam1: function(id) {
        return axios.post("/api/team1")
    },

    saveTeam2: function() {
        return axios.post("/api/team2")
    }


};


