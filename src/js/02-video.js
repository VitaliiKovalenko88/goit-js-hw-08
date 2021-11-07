import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_PLAYER = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIME_PLAYER, data.seconds);
};

const saveTime = () => {
  const seconds = localStorage.getItem(CURRENT_TIME_PLAYER);
  if (seconds) {
    player.setCurrentTime(seconds);
  }
};
player.on('timeupdate', throttle(onPlay, 1000));
window.addEventListener('DOMContentLoaded', saveTime);
