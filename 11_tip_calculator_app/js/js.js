"use strict";
let tipButton = document.querySelectorAll(".tipbutton");
let resetButton = document.querySelector("#resetbutton");

let billAmount = 0;
let tipPercent = 0;
let peopleAmount = 0;
let tipAmount = 0;
let totalAmount = 0;

function activateReset() {
  resetButton.style.backgroundColor = "#26c2ae";
}

function disableReset() {
  resetButton.removeAttribute("style");
}

function removeClick() {
  for (let i = 0; i < tipButton.length; i++) {
    tipButton[i].classList.remove("clicked");
  }
}

function calculateTip() {
  if (billAmount != 0 && tipPercent != 0 && peopleAmount != 0) {
    tipAmount = (billAmount * tipPercent) / 100;
    totalAmount = tipAmount * peopleAmount;
    document.querySelector("#tipAmount").innerHTML = tipAmount.toFixed(2);
    document.querySelector("#totalAmount").innerHTML = totalAmount.toFixed(2);
  }
  if (billAmount == 0 || tipPercent == 0 || peopleAmount == 0) {
    // tipAmount = 0;
    // totalAmount = 0;
    document.querySelector("#tipAmount").innerHTML = "0.00";
    document.querySelector("#totalAmount").innerHTML = "0.00";
  }
}

function resetAmounts() {
  billAmount = 0;
  tipPercent = 0;
  peopleAmount = 0;
  tipAmount = 0;
  totalAmount = 0;
  removeZero(0);
  removeZero(1);
  removeZero(2);
  document.querySelector("#bill_input").value = 0;
  document.querySelector("#person_input").value = 0;
  document.querySelector("#tipAmount").innerHTML = "0.00";
  document.querySelector("#totalAmount").innerHTML = "0.00";
  removeClick();
  disableReset();
  document.querySelector("#bill_input").classList.remove("errorborder");
  document.querySelector("#person_input").classList.remove("errorborder");
}

function checkZero() {
  if (billAmount == 0) {
    document.querySelectorAll(".errorTitle")[0].innerHTML = "Can’t be zero";
    document.querySelector("#bill_input").classList.add("errorborder");
  }
  if (tipPercent == 0) {
    document.querySelectorAll(".errorTitle")[1].innerHTML = "Can’t be zero";
  }
  if (peopleAmount == 0) {
    document.querySelectorAll(".errorTitle")[2].innerHTML = "Can’t be zero";
    document.querySelector("#person_input").classList.add("errorborder");
  }
}

function removeZero(e) {
  document.querySelectorAll(".errorTitle")[e].innerHTML = "";
}

for (let i = 0; i < tipButton.length; i++) {
  tipButton[i].addEventListener("click", (e) => {
    removeClick();
    e.target.classList.add("clicked");
    tipPercent = Number(tipButton[i].getAttribute("value"));
    checkZero();
    activateReset();
    calculateTip();
    activateReset();
    if (tipPercent != 0) {
      removeZero(1);
    }
  });
}

document.querySelector("#bill_input").addEventListener("click", () => {
  if (billAmount == 0) {
    checkZero();
  }
  activateReset();
});

document.querySelector("#bill_input").addEventListener("input", () => {
  billAmount = Number(document.querySelector("#bill_input").value);
  calculateTip();
  if (billAmount != 0) {
    removeZero(0);
    document.querySelector("#bill_input").classList.remove("errorborder");
  }

  if (billAmount == 0) {
    checkZero();
    document.querySelector("#bill_input").classList.add("errorborder");
  }
});

document.querySelector("#person_input").addEventListener("click", () => {
  if (peopleAmount == 0) {
    checkZero();
  }
  activateReset();
});

document.querySelector("#person_input").addEventListener("input", () => {
  peopleAmount = Number(document.querySelector("#person_input").value);

  calculateTip();
  if (peopleAmount != 0) {
    removeZero(2);
    document.querySelector("#person_input").classList.remove("errorborder");
  }

  if (peopleAmount == 0) {
    checkZero();
    document.querySelector("#person_input").classList.add("errorborder");
  }
});

resetButton.addEventListener("click", resetAmounts);
