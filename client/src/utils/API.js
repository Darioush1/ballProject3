import axios from "axios";

export default {
    //this gets all the player data
    getPlayers: function (req,res) {
        console.log()
        return axios.get("http://localhost:3001/api/player1/", )
    },
 
    getPlayerA: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("http://localhost:3001/api/teamA/", )
    },

    getPlayerB: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("http://localhost:3001/api/teamB/", )
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


