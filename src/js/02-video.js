import Player from '@vimeo/player';
// const Player = require('@vimeo/player');
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// console.log(localStorage);

const onPlay = function ({ seconds }) {
  try {
    // const currentTime = seconds;
    localStorage.setItem('videoplayer-current-time', seconds);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const throttlePlay = throttle(onPlay, 1000);

player.on('timeupdate', throttlePlay);

const getCurrentTime = function () {
  try {
    const getStorage = localStorage.getItem('videoplayer-current-time');
    return getStorage;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

player.setCurrentTime(getCurrentTime());

// console.log(
//   'player.setCurrentTime(getCurrentTime())',
//   player.setCurrentTime(getCurrentTime())
// );

// localStorage.clear()