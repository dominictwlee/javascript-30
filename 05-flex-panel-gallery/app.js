const panelText = document.querySelectorAll('.panel');

const textIn = function() {
  console.log('Hello');
  this.classList.toggle('open');
}

panelText.forEach((text) => {
  text.addEventListener('click', textIn);
})
