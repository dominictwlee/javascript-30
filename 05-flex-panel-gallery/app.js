const panel = document.querySelectorAll('.panel');

const flexOpen = function() {
  console.log('Hello');
  this.classList.toggle('open');
}

panel.forEach((text) => { text.addEventListener('click', flexOpen) })
