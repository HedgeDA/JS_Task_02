function Machine() {
    for (let element of document.getElementsByClassName('drum-kit__drum')) {
        element.addEventListener('click', () => element.getElementsByTagName('audio')[0].play())
    }
}

Machine();