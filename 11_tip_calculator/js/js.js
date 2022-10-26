"use strict";
let tipButton = document.querySelectorAll(".tipbutton");
let resetButton = document.querySelector("#resetbutton");
let person = document.querySelector("#person_input");
let tip = document.querySelector("#tipAmount");
let total = document.querySelector("#tipAmount");
let bill = document.querySelector("#bill_input");
let error = document.querySelectorAll(".errorTitle");

const Cal = {
  numVars: {
    billAmount: 0,
    tipPercent: 0,
    peopleAmount: 0,
    tipAmount: 0,
    totalAmount: 0,
  },
  removeZero(e) {
    error[e].innerHTML = "";
  },
  activateReset() {
    resetButton.style.backgroundColor = "#26c2ae";
  },
  removeClick() {
    for (let i = 0; i < tipButton.length; i++) {
      tipButton[i].classList.remove("clicked");
    }
  },
  checkZero() {
    if (Cal.numVars.billAmount == 0) {
      error[0].innerHTML = "Can’t be zero";
      bill.classList.add("errorborder");
    }
    if (Cal.numVars.tipPercent == 0) {
      error[1].innerHTML = "Can’t be zero";
    }
    if (Cal.numVars.peopleAmount == 0) {
      error[2].innerHTML = "Can’t be zero";
      person.classList.add("errorborder");
    }
  },
  billClick() {
    if (this.numVars.billAmount == 0) {
      this.checkZero();
    }
    this.activateReset();
  },
};

function disableReset() {
  resetButton.removeAttribute("style");
}

function calculateTip() {
  if (Cal.numVars.billAmount != 0 && Cal.numVars.tipPercent != 0 && Cal.numVars.peopleAmount != 0) {
    Cal.numVars.tipAmount = (Cal.numVars.billAmount * Cal.numVars.tipPercent) / 100;
    Cal.numVars.totalAmount = Cal.numVars.tipAmount / Cal.numVars.peopleAmount;
    tip.innerHTML = Cal.numVars.tipAmount.toFixed(2);
    total.innerHTML = Cal.numVars.totalAmount.toFixed(2);
  }
  if (Cal.numVars.billAmount == 0 || Cal.numVars.tipPercent == 0 || Cal.numVars.peopleAmount == 0) {
    tip.innerHTML = "0.00";
    total.innerHTML = "0.00";
  }
}

function resetAmounts() {
  Cal.numVars.billAmount = 0;
  Cal.numVars.tipPercent = Cal.numVars.peopleAmount = Cal.numVars.tipAmount = Cal.numVars.totalAmount = 0;

  Cal.removeZero(0);
  Cal.removeZero(1);
  Cal.removeZero(2);
  bill.value = "";
  person.value = "";
  tip.innerHTML = "0.00";
  total.innerHTML = "0.00";
  Cal.removeClick();
  disableReset();
  bill.classList.remove("errorborder");
  person.classList.remove("errorborder");
}

for (let i = 0; i < tipButton.length; i++) {
  tipButton[i].addEventListener("click", (e) => {
    Cal.removeClick();
    e.target.classList.add("clicked");
    Cal.numVars.tipPercent = Number(tipButton[i].getAttribute("value"));
    Cal.checkZero();
    Cal.activateReset();
    calculateTip();
    Cal.activateReset();
    if (Cal.numVars.tipPercent != 0) {
      Cal.removeZero(1);
    }
  });
}

bill.addEventListener("input", () => {
  Cal.numVars.billAmount = Number(bill.value);
  calculateTip();
  if (Cal.numVars.billAmount != 0) {
    Cal.removeZero(0);
    bill.classList.remove("errorborder");
  }

  if (Cal.numVars.billAmount == 0) {
    Cal.checkZero();
    bill.classList.add("errorborder");
  }
});

person.addEventListener("click", () => {
  if (Cal.numVars.peopleAmount == 0) {
    Cal.checkZero();
  }
  Cal.activateReset();
});

person.addEventListener("input", () => {
  Cal.numVars.peopleAmount = Number(person.value);

  calculateTip();
  if (Cal.numVars.peopleAmount != 0) {
    Cal.removeZero(2);
    person.classList.remove("errorborder");
  }

  if (Cal.numVars.peopleAmount == 0) {
    Cal.checkZero();
    person.classList.add("errorborder");
  }
});

resetButton.addEventListener("click", resetAmounts);
