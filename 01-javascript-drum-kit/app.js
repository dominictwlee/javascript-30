const keys = document.querySelectorAll('.key');

var sounds = {
  65: new Howl({
      src: ['sounds/boom.wav']
    }),
  83: new Howl({
      src: ['sounds/clap.wav']
    }),
  68: new Howl({
      src: ['sounds/hihat.wav']
    }),
  70: new Howl({
      src: ['sounds/kick.wav']
    }),
  71: new Howl({
      src: ['sounds/openhat.wav']
    }),
  72: new Howl({
      src: ['sounds/ride.wav']
    }),
  74: new Howl({
      src: ['sounds/snare.wav']
    }),
  75: new Howl({
      src: ['sounds/tink.wav']
    }),
  76: new Howl({
      src: ['sounds/tom.wav']
    }),
}

window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  key.classList.add('toggled');
  for (let key of Object.keys(sounds)) {
    if (e.keyCode == parseInt(key)) {
      sounds[parseInt(key)].play();
    }
  }
});

document.addEventListener('transitionend', (e) => {
  for (let key of keys) {
    key.classList.remove('toggled');
  }
});
