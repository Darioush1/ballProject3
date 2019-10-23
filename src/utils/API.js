import axios from 'axios';

export default {
    getPlayer: function () {
        
    console.log('works?');
        return axios.get("https://nba-players.herokuapp.com/players-stats")
    }
};

