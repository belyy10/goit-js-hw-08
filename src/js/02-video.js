import Player from '@vimeo/player'
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on ('timeupdate', throttle(onPlay, 1000));
function onPlay (e) {
    const currentTime = e.seconds
    console.log(currentTime)
    localStorage.setItem ('videoplayer-current-time',currentTime)
}

    const afterTimeUpdate = localStorage.getItem ('videoplayer-current-time')

    if(afterTimeUpdate) {
        player.setCurrentTime (afterTimeUpdate)
    }