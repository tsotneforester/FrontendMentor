//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const slider = document.querySelector("#slider");
const circle = document.querySelector("#circle");
const color_line = document.querySelector("#color-line");
const price_amount = document.querySelector("#price-amount");
const view_amount = document.querySelector("#view-amount");
const switcher_ball = document.querySelector("#switcher-ball");
const switcher = document.querySelector("#switcher");
const input = document.querySelector("input");

let yearlyStatus = false;

const loan = {
  0: ["10K", 8],
  25: ["50K", 12],
  50: ["100K", 16],
  75: ["500K", 24],
  100: ["1M", 36],
};

function numberChange() {
  if (yearlyStatus) {
    price_amount.innerHTML = "$" + (loan[slider.value][1] * 0.75).toFixed(2);
    view_amount.innerHTML = loan[slider.value][0];
  } else {
    price_amount.innerHTML = "$" + loan[slider.value][1].toFixed(2);
    view_amount.innerHTML = loan[slider.value][0];
  }
}

switcher.addEventListener("click", () => {
  if (!yearlyStatus) {
    switcher_ball.style.transform = "translate(24px, 4px)";
    switcher.style.backgroundColor = "#7aeadf";
  } else {
    switcher_ball.style.transform = "translate(5px, 4px)";
    switcher.style.backgroundColor = "#cfd8ef";
  }
  yearlyStatus = !yearlyStatus;
  numberChange();
});

slider.addEventListener("input", () => {
  let sliderValue = slider.value / 100;
  if (window.innerWidth > 678) {
    circle.style.transform = "translate(" + 404 * sliderValue + "px)";
    color_line.style.width = 444 * sliderValue + "px";
  } else {
    circle.style.transform = "translate(" + 236 * sliderValue + "px)";
    color_line.style.width = 276 * sliderValue + "px";
  }
  numberChange();
});

window.addEventListener("resize", () => {
  let sliderValue = slider.value / 100;
  if (window.innerWidth > 678) {
    circle.style.transform = "translate(" + 404 * sliderValue + "px)";
    color_line.style.width = 444 * sliderValue + "px";
  } else {
    circle.style.transform = "translate(" + 236 * sliderValue + "px)";
    color_line.style.width = 276 * sliderValue + "px";
  }
  numberChange();
});

input.addEventListener("mouseenter", () => {
  circle.style.backgroundColor = "#7AEADF";
});
input.addEventListener("mouseleave", () => {
  circle.style.backgroundColor = "#24AEA1";
});
input.addEventListener("mousedown", () => {
  input.style.cursor = "-webkit-grabbing";
});
input.addEventListener("mouseup", () => {
  input.style.cursor = "pointer";
});
