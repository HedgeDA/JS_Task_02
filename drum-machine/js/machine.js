function Machine() {
    for (let element of document.getElementsByClassName('drum-kit__drum')) {
        element.addEventListener('click', () => {
            let audio = element.getElementsByTagName('audio')[0];

            audio.src = audio.src;
            audio.play()
        })
    }
}

Machine();