//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
//let bill_input = document.getElementById("bill-input");
let bill_input = document.querySelector(".bill-box .input-line input");
let tip_input = document.querySelector(".tip-box div input");
let person_input = document.querySelector(".person-box .input-line input");

let tip_pp = document.querySelectorAll("h4")[0];
let total_pp = document.querySelectorAll("h4")[1];

let reset_button = document.querySelector(".calculation-box > button");
let tip_buttons = document.querySelectorAll(".tip-box > div button");

let error_text = document.querySelector(".error-title");

let billMultiplier = 0;
let tipMultiplier = 0;
let personMultiplier = null;
//|||||||||||||||| I N P U T s  &   R E G E X ||||||||||||||||

bill_input.addEventListener("input", function () {
  bill_input.value = bill_input.value.replace(/[^0-9]/g, "");
  billMultiplier = bill_input.value * 1;
  totalAmount();
});

bill_input.addEventListener("blur", function () {
  if (person_input.value == 0) {
    error_text.innerHTML = "Can’t be zero";
    person_input.classList.add("error-border");
  }
});

tip_input.addEventListener("input", function () {
  tip_input.value = tip_input.value.replace(/[^0-9]/g, "").slice(0, 2);
  unclick();
  tipMultiplier = tip_input.value / 100;
  totalAmount();
});

person_input.addEventListener("input", function () {
  person_input.value = person_input.value.replace(/[^0-9]/g, "");
  personMultiplier = person_input.value * 1;
  totalAmount();
});

person_input.addEventListener("blur", function () {
  if (person_input.value == 0) {
    error_text.innerHTML = "Can’t be zero";
    person_input.classList.add("error-border");
  }
});
//|||||||||||||||||||| C L I C K  style toggle ||||||||||||||

tip_buttons.forEach((e) => {
  e.addEventListener("click", function () {
    tip_input.value = "";
    unclick();
    e.classList.add("clicked");
    tipMultiplier = e.value / 100;
    totalAmount();
  });
});

function unclick() {
  for (let i = 0; i < tip_buttons.length; i++) {
    tip_buttons[i].classList.remove("clicked");
  }
}
//||||||||||||||||||||||||Calculate||||||||||||||||||||||

function totalAmount() {
  let total = billMultiplier + billMultiplier * tipMultiplier;
  let tip = billMultiplier * tipMultiplier;

  let tipPP = (tip / personMultiplier) * 1;
  let totalPP = (total / personMultiplier) * 1;
  let zoroHero = 0;

  if (tipPP && totalPP && personMultiplier) {
    tip_pp.innerHTML = tipPP.toFixed(2);
    total_pp.innerHTML = totalPP.toFixed(2);
    reset_button.classList.remove("disabled");
    error_text.innerHTML = "";
    person_input.classList.remove("error-border");
  } else {
    total_pp.innerHTML = zoroHero.toFixed(2);
    tip_pp.innerHTML = zoroHero.toFixed(2);
    reset_button.classList.add("disabled");
  }
}
//|||||||||||||||||| Reset |||||||||||||||||

reset_button.addEventListener("click", function () {
  location.reload();
});
