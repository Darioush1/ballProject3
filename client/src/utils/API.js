import axios from "axios";

export default {
    //this gets all the player data
    getPlayers: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("http://localhost:3001/api/player1/", )
    },
 //this shows team A
    getPlayerA: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("http://localhost:3001/api/teamA/", )
    },

    savePlayer1: function (player1Stats) {
        
        return axios.post("http://localhost:3001/api/teamA/", player1Stats)
    },

    savePlayer2: function(player2Stats) {
        return axios.post("http://localhost:3001/api/teamB/", player2Stats)
    },

    clearTeam1: function (id) {
        return axios.delete("http://localhost:3001/api/teamA/", id)
    }
};


