//  Current Time Variables


//  Clock Element Selectors
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('min');
const secondHand = document.getElementById('sec');

function setTime() {
  const currentDate = new Date();
  const hour = (currentDate.getHours() % 12) * 30 + (currentDate.getMinutes() / 2)
  const minute = 6* currentDate.getMinutes();
  const second = 6 * currentDate.getSeconds();
  secondHand.setAttribute('transform', `rotate(${second} 50 50)`)
  minuteHand.setAttribute('transform', `rotate(${minute} 50 50)`)
  hourHand.setAttribute('transform', `rotate(${hour} 50 50)`)
  console.log(second);
}

setInterval(setTime, 1000);
