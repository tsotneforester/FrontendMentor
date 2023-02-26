//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
let billInput = document.querySelector("#bill-input");
let tipInput = document.querySelector("#tip-input");
let personInput = document.querySelector("#person-input");
/////
let tipPP = document.getElementById("tip-pp");
let totalPP = document.getElementById("total-pp");
////
let reset = document.getElementById("reset-btn");
let tipButtons = document.querySelectorAll("#group button");
let input = document.querySelectorAll("input");
////
let error_text = document.querySelector(".error-title");
///
let billMultiplier = 0;
let tipMultiplier = 0;
let personMultiplier = null;
//|||||||||||||||| I N P U T s  &   R E G E X ||||||||||||||||

billInput.addEventListener("input", function () {
  billInput.value = billInput.value.replace(/[^0-9]/g, "");
  billMultiplier = billInput.value * 1;
  totalAmount();
});

tipInput.addEventListener("input", function () {
  tipInput.value = tipInput.value.replace(/[^0-9]/g, "").slice(0, 2);
  unclick();
  tipMultiplier = tipInput.value / 100;
  totalAmount();
});

personInput.addEventListener("input", function () {
  personInput.value = personInput.value.replace(/[^0-9]/g, "");
  personMultiplier = personInput.value * 1;
  totalAmount();
});

personInput.addEventListener("blur", function () {
  if (personInput.value == 0) {
    error_text.innerHTML = "Can’t be zero";
    personInput.classList.add("errorborder");
  }
});
//|||||||||||||||||||| C L I C K  style toggle ||||||||||||||

tipButtons.forEach((e) => {
  e.addEventListener("click", function () {
    tipInput.value = "";
    unclick();
    e.classList.add("clicked");
    tipMultiplier = e.value / 100;
    totalAmount();
  });
});

function unclick() {
  for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].classList.remove("clicked");
  }
}
//////////////////////Calculate//////////////////

function totalAmount() {
  let total = billMultiplier + billMultiplier * tipMultiplier;
  let tip = billMultiplier * tipMultiplier;

  let tip_pp = (tip / personMultiplier) * 1;
  console.log(tip_pp);
  let total_pp = (total / personMultiplier) * 1;
  console.log(total_pp);
  let zoroHero = 0;

  if (tip_pp && total_pp && personMultiplier) {
    tipPP.innerHTML = tip_pp.toFixed(2);
    totalPP.innerHTML = total_pp.toFixed(2);
    reset.classList.remove("disabled");
    error_text.innerHTML = "";
    personInput.classList.remove("errorborder");
  } else {
    totalPP.innerHTML = zoroHero.toFixed(2);
    tipPP.innerHTML = zoroHero.toFixed(2);
    reset.classList.add("disabled");
  }
}
//|||||||||||||||||| Reset |||||||||||||||||

reset.addEventListener("click", function () {
  location.reload();
});
