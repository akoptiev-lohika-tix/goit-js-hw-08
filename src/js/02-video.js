import Player from '@vimeo/player';
import { save, load } from './storage';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let savedPlayerTime = load('videoPlayer-current-time');

const onPlay = time => save('videoPlayer-current-time', time);
player.on('timeupdate', _.throttle(onPlay, 1000));

player.setCurrentTime(savedPlayerTime.seconds);
