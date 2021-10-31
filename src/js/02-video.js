import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640,
});

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(e) {
    localStorage.setItem('videoplayer-current-time', `${e.seconds}`)
};

const time = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(time);