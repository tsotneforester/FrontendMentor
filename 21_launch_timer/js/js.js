//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

let second_section = document.querySelector(".second-section");
let minute_section = document.querySelector(".minute-section");
let hour_section = document.querySelector(".hour-section");
let day_section = document.querySelector(".day-section");

let futureDate = moment().add(14, "days");

setInterval(() => {
  let dateObject = moment.preciseDiff(futureDate, moment(), true);

  let { years: yy, months: MM, days: dd, hours: hh, minutes: mm, seconds: ss } = dateObject;

  let second_up = document.querySelector(".second-section .up");
  let second_down = document.querySelector(".second-section .down");

  second_up.style.transform = `rotateX(-170deg)`;

  setTimeout(() => {
    second_down.innerHTML = updateCardDown(ss);
    second_up.remove();
  }, 430);

  second_section.insertAdjacentHTML("afterbegin", createNewCardUp(ss));

  if (ss == 59) {
    let minute_up = document.querySelector(".minute-section .up");
    let minute_down = document.querySelector(".minute-section .down");

    minute_up.style.transform = `rotateX(-170deg)`;

    setTimeout(() => {
      minute_down.innerHTML = updateCardDown(mm);
    }, 430);

    minute_section.insertAdjacentHTML("afterbegin", createNewCardUp(mm));
  }

  if (ss == 59 && mm == 59) {
    let hour_up = document.querySelector(".hour-section .up");
    let hour_down = document.querySelector(".hour-section .down");

    hour_up.style.transform = `rotateX(-170deg)`;

    setTimeout(() => {
      hour_down.innerHTML = updateCardDown(hh);
      hour_up.remove();
    }, 430);

    hour_section.insertAdjacentHTML("afterbegin", createNewCardUp(hh));
  }

  if (ss == 59 && mm == 59 && hh == 23) {
    let day_up = document.querySelector(".day-section .up");
    let day_down = document.querySelector(".day-section .down");

    day_up.style.transform = `rotateX(-170deg)`;

    setTimeout(() => {
      day_down.innerHTML = updateCardDown(dd);
      day_up.remove();
    }, 430);

    day_section.insertAdjacentHTML("afterbegin", createNewCardUp(dd));
  }
}, 1000);

function createNewCardUp(time) {
  return `<div class="card up">
          <h3>${time < 10 ? `0${time}` : time}</h3>
             <div></div>
          <div></div>
        </div>`;
}

function updateCardDown(time) {
  return `<h3>${time < 10 ? `0${time}` : time}</h3>   <div></div>
          <div></div>`;
}
