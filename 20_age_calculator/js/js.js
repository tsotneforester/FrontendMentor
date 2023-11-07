//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
//|||||||||||||||| Selectors |||||||||||||||||||||||||||||
let errors = document.querySelectorAll(".error");
let results = document.querySelectorAll(".result span");
let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
const loopLength = 3;

let day_input = document.getElementById("day");
let month_input = document.getElementById("month");
let year_input = document.getElementById("year");

let year_result = document.querySelector(".year-result span");
let month_result = document.querySelector(".month-result span");
let day_result = document.querySelector(".day-result span");

let submit = document.querySelector(".circle");
//||||||||||||||||||||||||||||||||||||||||||||||||
//                   Main Function              ||
//||||||||||||||||||||||||||||||||||||||||||||||||

function calculateDates() {
  removeAllError(); // 1. removes error messages and reset lable color
  const enteredDate = moment([year_input.value, month_input.value - 1, day_input.value]); //with Moment.js, generate entered date

  dayValidation(day_input.value); //2. Day validation check, but it is not ideal as november 31 is not caught
  monthValidation(month_input.value); //3. Month validation check
  emptyFieldCheck(); //4. Empty input check
  //moment.js detects weather dati is valid
  if (enteredDate.isValid()) {
    //makes array from "32 years 5 months 13 days 18 hours 16 minutes 28 seconds"
    let dateArray = moment(enteredDate).preciseDiff(moment()).split(" ");

    let yearPassed = dateArray[0];
    let monthPassed = dateArray[2];
    let dayPassed = dateArray[4];

    year_result.innerHTML = yearPassed;
    month_result.innerHTML = monthPassed;
    day_result.innerHTML = dayPassed;
    yearValidation(year_input.value); //5. as future date is valid, but not accepted for our purposes, we check it inside date validation
  } else {
    //as no visual error exists, if date is invalid, it is '31 November'-like problem
    if (errors[1].innerHTML == "" && errors[2].innerHTML == "") {
      errors[0].innerHTML = "Must be a valid day";
      labels[0].style.color = "#ff5757";
      inputs[0].style.outlineColor = "#ff5757";
    }
    resetResults(); //6. resets result to "--"
  }
}

submit.addEventListener("click", calculateDates);

//|||||||||| zero in front of single number fix|||||||||
inputs.forEach((input) => {
  input.addEventListener("focusout", function () {
    if (input.value.length == 1) {
      input.value = `0${input.value}`;
    }
  });
});
//||||||||||triggers calculateDates() on Enter|||||||
document.addEventListener("keydown", function myFunction(event) {
  if (event.key == "Enter") {
    calculateDates();
  }
});
//||||||||||||||||||||||   1   ||||||||||||||||||||||||||
function removeAllError() {
  for (let i = 0; i < loopLength; i++) {
    errors[i].innerHTML = "";
    labels[i].style.color = "#716f6f";
    inputs[i].style.outlineColor = "#716f6f";
  }
}
//||||||||||||||||||||||   2   ||||||||||||||||||||||||||
function dayValidation(input) {
  if (Number(input) >= 32 || Number(input) <= 0) {
    errors[0].innerHTML = "Must be a valid day";
    labels[0].style.color = "#ff5757";
    inputs[0].style.outlineColor = "#ff5757";
  }
}
//||||||||||||||||||||||   3   ||||||||||||||||||||||||||
function monthValidation(input) {
  if (Number(input) >= 13 || Number(input) <= 0) {
    errors[1].innerHTML = "Must be a valid month";
    labels[1].style.color = "#ff5757";
    inputs[1].style.outlineColor = "#ff5757";
  }
}
//||||||||||||||||||||||   4   ||||||||||||||||||||||||||
function emptyFieldCheck() {
  for (let i = 0; i < loopLength; i++) {
    if (inputs[i].value == "") {
      errors[i].innerHTML = "This field is required";
      labels[i].style.color = "#ff5757";
      inputs[i].style.outlineColor = "#ff5757";
    }
  }
}
//||||||||||||||||||||||   5   ||||||||||||||||||||||||||
function yearValidation(input) {
  if (Number(input) >= moment().year()) {
    errors[2].innerHTML = "Must be in the past";
    labels[2].style.color = "#ff5757";
    inputs[2].style.outlineColor = "#ff5757";
    resetResults();
  }
}

//|||||||||||||||||||||    6    ||||||||||||||||||||||||||||
function resetResults() {
  for (let i = 0; i < loopLength; i++) {
    results[i].innerHTML = "--";
  }
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
