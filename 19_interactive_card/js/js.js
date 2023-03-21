//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
let cvcInput = document.getElementById("cvc");
let cvcEngraved = document.getElementById("engraved-cvc");
let numberInput = document.getElementById("number");
let numberEngraved = document.getElementById("engraved-number");
let nameInput = document.getElementById("name");
let nameEngraved = document.getElementById("engraved-name");
let monthInput = document.getElementById("month");
let monthEngraved = document.getElementById("engraved-month");
let yearInput = document.getElementById("year");
let yearEngraved = document.getElementById("engraved-year");
cvcInput.addEventListener("input", function () {
  cvcEngraved.innerHTML = cvcInput.value;
  cvcInput.value = cvcInput.value.replace(/[^0-9]/g, "");
});

numberInput.addEventListener("input", function (e) {
  let raw = e.target.value.replaceAll(" ", "");

  if (raw) {
    let rawReg = raw.match(/\w{4}/g);
    let result = rawReg ? spaceify(raw) : e.target.value;

    numberEngraved.innerHTML = result;
    numberInput.value = result.trim();
  } else {
    numberEngraved.innerHTML = "0000 0000 0000 0000";
  }
});

nameInput.addEventListener("input", function () {
  nameEngraved.innerHTML = nameInput.value.toUpperCase();
});

monthInput.addEventListener("input", function () {
  monthEngraved.innerHTML = monthInput.value;
  monthInput.value = monthInput.value.replace(/[^0-9]/g, "");
  if (monthInput.value > 12) {
    monthInput.value = 12;
    monthEngraved.innerHTML = 12;
  }
});

yearInput.addEventListener("input", function () {
  yearEngraved.innerHTML = yearInput.value;
  yearInput.value = yearInput.value.replace(/[^0-9]/g, "");
});

function spaceify(string) {
  let arr = [...string];
  let n = Math.floor(arr.length / 4);
  for (let i = 0; i < n; i++) {
    arr.splice(4 + 4 * i + i, 0, " ");
  }
  return arr.join("");
}

let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  let allInput = document.querySelectorAll("input");
  let allError = document.querySelectorAll(".error");

  for (let i = 0; i < allInput.length; i++) {
    if (allInput[i].value == "") {
      allError[i].innerHTML = "Can`t be blank";
      allError[i].style.height = "20px";
      allInput[i].classList.add("errored");
      shakeMe();
    } else {
      allError[i].style.height = "0";
      allInput[i].classList.remove("errored");
    }
  }

  if (numberInput.value.replaceAll(" ", "").length > 1 && numberInput.value.replaceAll(" ", "").length < 16) {
    allError[1].innerHTML = "Number is too short";
    allError[1].style.height = "20px";
    allInput[1].classList.add("errored");
    shakeMe();
  }

  if (numberInput.value.replaceAll(" ", "").length == 16) {
    let pattern = /\D+/g;

    if (pattern.test(numberInput.value.replaceAll(" ", ""))) {
      console.log(numberInput.value.replaceAll(" ", ""));
      allError[1].innerHTML = "Wrong format, numbers only";
      allError[1].style.height = "20px";
      allInput[1].classList.add("errored");
      shakeMe();
    } else {
      allError[1].style.height = "0";
      allInput[1].classList.remove("errored");
    }

    // if (!pattern.test(numberInput.value.replaceAll(" ", ""))) {
    // }
  }

  if (cvcInput.value.length < 3) {
    allError[4].innerHTML = "Number is too short";
    allError[4].style.height = "20px";
    allInput[4].classList.add("errored");
    shakeMe();
  }

  if (cvcInput.value.length > 2) {
    allError[4].style.height = "0";
    allInput[4].classList.remove("errored");
  }
});

function shakeMe() {
  submit.classList.add("active");
  setTimeout(function () {
    submit.classList.remove("active");
  }, 350);
}
