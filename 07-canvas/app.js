const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let startX = 0;
let startY = 0;
let hue = 0;
let lineWidth = 1;
let growLine = true;
let timerId;

canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight - 100;

const startEffect = () => {
  timerId = setInterval(() => {
    if (growLine) {
      lineWidth += 2;
    } else {
      lineWidth -= 2;
    }

    hue = hue + 2;

    if (hue >= 360) {
      hue = 0;
    }

    if (lineWidth >= 50 || lineWidth <= 1) {
      growLine = !growLine;
    }

    console.log(lineWidth);
  }, 100);
};

const draw = e => {
  if (!isDrawing) {
    return null;
  }

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = lineWidth;

  ctx.beginPath();

  // line starting point
  ctx.moveTo(startX, startY);

  // line destination
  ctx.lineTo(e.offsetX, e.offsetY);

  ctx.stroke();

  [startX, startY] = [e.offsetX, e.offsetY];
};

canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  [startX, startY] = [e.offsetX, e.offsetY];
  startEffect();
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', () => (isDrawing = false));

document.getElementById('btn').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mouseup', () => {
  clearInterval(timerId);
  isDrawing = false;
});
