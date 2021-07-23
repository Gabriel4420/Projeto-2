const querySelector = (element) => document.querySelector(`${element}`);
let digitalEL = querySelector('.digital');

let secondEl = querySelector(' .p_s');
let minuteEl = querySelector(' .p_m');
let hourEl = querySelector(' .p_h');

const updateClocks = () => {
  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();

  let second = now.getSeconds();



  digitalEL.innerHTML = ` ${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)} `;

  let secondsDegrade = ((360 / 60) * second) - 90;

  let minutesDegrade = ((360 / 60) * minute) - 90;

  let hourDegrade = ((360 / 12) * hour) - 90;

  secondEl.style.transform = `rotate(${secondsDegrade}deg)`;

  minuteEl.style.transform = `rotate(${minutesDegrade}deg)`;

  hourEl.style.transform = `rotate(${hourDegrade}deg)`;


}

const fixZero = (time) => {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClocks, 1000);

updateClocks();