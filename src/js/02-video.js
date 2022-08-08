import Player from '@vimeo/player';
import _ from 'lodash';

import { save, load } from './storage';

let savedPlayerTime = load('videoPlayer-current-time');

if (!savedPlayerTime) {
  setInitialStorage();
}

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = time => save('videoPlayer-current-time', time.seconds);
player.on('timeupdate', _.throttle(onPlay, 1000));
player.setCurrentTime(savedPlayerTime);

function setInitialStorage() {
  save('videoPlayer-current-time', 0);
}
