const sound = document.querySelector('.sound[data-key="65"]');

document.addEventListener('keydown', (e) => {
    sound.play();
});
