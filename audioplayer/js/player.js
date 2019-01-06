// Песни для плеера
// [LA Chill Tour](https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3)
// [This is it band](https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3)
// [LA Fusion Jam](https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3)

const songs = [
    {
        song: 'LA Chill Tour', 
        link: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3'
    },
    {
        song: 'This is it band', 
        link: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3'
    },
    {
        song: 'LA Fusion Jam', 
        link: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3'
    }
];

const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];
const audio = mediaPlayer.getElementsByTagName('audio')[0];
const controls = document.getElementsByClassName('controls')[0];
const title = controls.getElementsByClassName('title')[0];

function Player() {
    let index = 0;

    controls.getElementsByClassName('playstate')[0].addEventListener('click', function() {
        console.log('+');
        if (audio.src !== songs[index].link) {
            audio.src = songs[index].link;
            title.title = songs[index].song;
        }

        if (mediaPlayer.classList.contains('play')) {
            mediaPlayer.classList.remove('play');

            audio.pause();
        } else {
            mediaPlayer.classList.add('play');

            audio.play();
        }
    });

    controls.getElementsByClassName('stop')[0].addEventListener('click', function() {
        mediaPlayer.classList.remove('play');

        audio.src = '';

        audio.stop();
    });

    controls.getElementsByClassName('back')[0].addEventListener('click', function() {
        index--;
        if (index < 0) {
            index = songs.length - 1;
        }

        audio.src = songs[index].link;
        title.title = songs[index].song;

        if (mediaPlayer.classList.contains('play')) {
            audio.play()
        }
    });

    controls.getElementsByClassName('next')[0].addEventListener('click', function() {
        index++;
        if (index > songs.length - 1) {
            index = 0;
        }

        audio.src = songs[index].link;
        title.title = songs[index].song;

        if (mediaPlayer.classList.contains('play')) {
            audio.play()
        }
    });
}

Player();