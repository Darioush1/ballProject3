import axios from "axios";

export default {
    getPlayers: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("http://localhost:8000/api/getPlayers", )
    },
 
    submitPlayers: function (player1, player2) {
        return axios.post("http://localhost:8000/api/apiRoutes", 
        { player1: player1, player2: player2 });
    },

    savePlayer1: function (TeamA) {
        
        return axios.post("http://localhost:3001/api/teamA/", TeamA)
    },

    savePlayer2: function(TeamB) {
        return axios.post("http://localhost:3001/api/teamB/", TeamB)
    },

    saveTeam1: function(id) {
        return axios.post("/api/team1")
    },

    saveTeam2: function() {
        return axios.post("/api/team2")
    }
};


