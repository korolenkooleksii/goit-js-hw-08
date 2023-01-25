import Player from '@vimeo/player';
// const Player = require('@vimeo/player');
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(localStorage);

const onPlay = function ({ seconds }) {
  try {
    const currentTime = seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const throttlePlay = throttle(onPlay, 1000);

player.on('timeupdate', throttlePlay);


// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
