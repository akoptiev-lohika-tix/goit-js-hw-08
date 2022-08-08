import Player from '@vimeo/player';
import _ from 'lodash';

import { save, load } from './storage';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let savedPlayerTime = load('videoPlayer-current-time');

const onPlay = time => save('videoPlayer-current-time', time.seconds);
player.on('timeupdate', _.throttle(onPlay, 1000));

if (!savedPlayerTime) {
  setInitialStorage();
} else {
  player.setCurrentTime(savedPlayerTime);
}

function setInitialStorage() {
  save('videoPlayer-current-time', 0);
}
