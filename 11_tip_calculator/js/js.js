"use strict";
let tipButton = document.querySelectorAll(".tipbutton");
let resetButton = document.querySelector("#resetbutton");
let person = document.querySelector("#person_input");
let tip = document.querySelector("#tipAmount");
let total = document.querySelector("#totalAmount");
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
    if (this.numVars.billAmount == 0) {
      error[0].innerHTML = "Can’t be zero";
      bill.classList.add("errorborder");
    }
    if (this.numVars.tipPercent == 0) {
      error[1].innerHTML = "Can’t be zero";
    }
    if (this.numVars.peopleAmount == 0) {
      error[2].innerHTML = "Can’t be zero";
      person.classList.add("errorborder");
    }
    this.activateReset();
  },
  disableReset() {
    resetButton.removeAttribute("style");
  },
  calculateTip() {
    if (this.numVars.billAmount != 0 && this.numVars.tipPercent != 0 && this.numVars.peopleAmount != 0) {
      this.numVars.tipAmount = (this.numVars.billAmount * this.numVars.tipPercent) / 100;
      this.numVars.totalAmount = this.numVars.tipAmount / this.numVars.peopleAmount;
      tip.innerHTML = this.numVars.tipAmount.toFixed(2);
      total.innerHTML = this.numVars.totalAmount.toFixed(2);
    }
    if (this.numVars.billAmount == 0 || this.numVars.tipPercent == 0 || this.numVars.peopleAmount == 0) {
      tip.innerHTML = "0.00";
      total.innerHTML = "0.00";
    }
  },
  resetAmounts() {
    this.numVars.billAmount = this.numVars.tipPercent = this.numVars.peopleAmount = this.numVars.tipAmount = this.numVars.totalAmount = 0;
    this.removeZero(0);
    this.removeZero(1);
    this.removeZero(2);
    bill.value = "";
    person.value = "";
    tip.innerHTML = "0.00";
    total.innerHTML = "0.00";
    this.removeClick();
    this.disableReset();
    bill.classList.remove("errorborder");
    person.classList.remove("errorborder");
  },
  patternControl(e) {
    e.value = e.value.replace(/[^0-9]/g, "");
  },
  displayTip(numVarsKey, input) {
    this.patternControl(input);
    let frozen = numVarsKey;
    this.numVars[frozen] = Number(input.value);
    this.calculateTip();
    if (this.numVars[frozen] != 0) {
      this.removeZero(0);
      input.classList.remove("errorborder");
    }

    if (this.numVars[frozen] == 0) {
      this.checkZero();
      input.classList.add("errorborder");
    }
  },
  tipButtonAction(e) {
    this.removeClick();
    tipButton[e].classList.add("clicked");
    this.numVars.tipPercent = Number(tipButton[e].getAttribute("value"));
    this.checkZero();
    this.activateReset();
    this.calculateTip();
    this.activateReset();
    if (this.numVars.tipPercent != 0) {
      this.removeZero(1);
    }
  },
};
