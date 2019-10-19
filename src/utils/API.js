import axios from 'axios';

export default {
    getPlayer: function () {
        return axios.get("https://nba-players.herokuapp.com/players-stats")
    }
};

