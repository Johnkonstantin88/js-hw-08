import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

const CURRENT_TIME_KEY = "videoplayer-current-time";

const onPlay = function(data) {
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds)); 
    console.log(data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY));

player.setCurrentTime(currentTime).then(function (seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
           
            break;
    }
});

localStorage.clear();

