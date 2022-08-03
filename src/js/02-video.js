import Player from '@vimeo/player';
import _ from 'lodash';

import { save, load } from './storage';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let savedPlayerTime = load('videoPlayer-current-time');

const onPlay = time => save('videoPlayer-current-time', time);
player.on('timeupdate', _.throttle(onPlay, 1000));

player.setCurrentTime(savedPlayerTime.seconds);