import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_PLAYER = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIME_PLAYER, data.seconds);
};

player
  .setCurrentTime(localStorage.getItem(CURRENT_TIME_PLAYER))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', throttle(onPlay, 1000));
