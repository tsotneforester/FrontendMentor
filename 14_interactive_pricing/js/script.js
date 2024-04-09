//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const price_amount = document.querySelector("#price-amount");
const view_amount = document.querySelector("#view-amount");
const switcher_ball = document.querySelector(".switcher-ball");
const switcher = document.querySelector(".switcher");
const input = document.querySelector("input");
let yearlyStatus = false;

const loan = {
  0: ["10K", 8],
  25: ["50K", 12],
  50: ["100K", 16],
  75: ["500K", 24],
  100: ["1M", 36],
};

function updatePrice() {
  if (yearlyStatus) {
    price_amount.innerHTML = "$" + (loan[slider.value][1] * 0.75).toFixed(2);
    view_amount.innerHTML = loan[slider.value][0];
  } else {
    price_amount.innerHTML = "$" + loan[slider.value][1].toFixed(2);
    view_amount.innerHTML = loan[slider.value][0];
  }
}

switcher.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  yearlyStatus = !yearlyStatus;
  updatePrice();
});

input.addEventListener("input", (e) => {
  let stepPercent = (e.target.value / (e.target.max - e.target.min)) * 100;
  e.target.style.background = `linear-gradient(to right, #a4f3eb 0%, #a4f3eb ${stepPercent}%, #ecf0fb ${stepPercent}%, #ecf0fb 100%)`;

  updatePrice();
});
