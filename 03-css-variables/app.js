const inputs = document.querySelectorAll('.inputs input');

// function handleUpdate() {
//   const unit = this.dataset
// }

for (let input of inputs) {
  input.addEventListener('input', (e) => {
    const unit = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${input.name}`, input.value + unit);
  })
}
