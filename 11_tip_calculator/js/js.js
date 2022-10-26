"use strict";
let tip_buttons = document.querySelectorAll(".tip-button");
let reset_button = document.querySelector("#reset-button");
let person_input = document.querySelector("#person-input");
let bill_input = document.querySelector("#bill-input");
let tip_span = document.querySelector("#tip-amount");
let total_span = document.querySelector("#total-amount");
let error_text = document.querySelectorAll(".error-title");

const Cal = {
  numVars: {
    billAmount: 0,
    tipPercent: 0,
    peopleAmount: 0,
    tipAmount: 0,
    totalAmount: 0,
  },
  removeZero(e) {
    error_text[e].innerHTML = "";
  },
  activateReset() {
    reset_button.style.backgroundColor = "#26c2ae";
  },
  removeClick() {
    for (let i = 0; i < tip_buttons.length; i++) {
      tip_buttons[i].classList.remove("clicked");
    }
  },
  checkZero() {
    if (this.numVars.billAmount == 0) {
      error_text[0].innerHTML = "Can’t be zero";
      bill_input.classList.add("errorborder");
    }
    if (this.numVars.tipPercent == 0) {
      error_text[1].innerHTML = "Can’t be zero";
    }
    if (this.numVars.peopleAmount == 0) {
      error_text[2].innerHTML = "Can’t be zero";
      person_input.classList.add("errorborder");
    }
    this.activateReset();
  },
  disableReset() {
    reset_button.removeAttribute("style");
  },
  calculateTip() {
    if (this.numVars.billAmount != 0 && this.numVars.tipPercent != 0 && this.numVars.peopleAmount != 0) {
      this.numVars.tipAmount = (this.numVars.billAmount * this.numVars.tipPercent) / 100;
      this.numVars.totalAmount = this.numVars.tipAmount / this.numVars.peopleAmount;
      tip_span.innerHTML = this.numVars.tipAmount.toFixed(2);
      total_span.innerHTML = this.numVars.totalAmount.toFixed(2);
    }
    if (this.numVars.billAmount == 0 || this.numVars.tipPercent == 0 || this.numVars.peopleAmount == 0) {
      tip_span.innerHTML = "0.00";
      total_span.innerHTML = "0.00";
    }
  },
  resetAmounts() {
    this.numVars.billAmount = this.numVars.tipPercent = this.numVars.peopleAmount = this.numVars.tipAmount = this.numVars.totalAmount = 0;
    this.removeZero(0);
    this.removeZero(1);
    this.removeZero(2);
    bill_input.value = "";
    person_input.value = "";
    tip_span.innerHTML = "0.00";
    total_span.innerHTML = "0.00";
    this.removeClick();
    this.disableReset();
    bill_input.classList.remove("errorborder");
    person_input.classList.remove("errorborder");
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
    tip_buttons[e].classList.add("clicked");
    this.numVars.tipPercent = Number(tip_buttons[e].getAttribute("value"));
    this.checkZero();
    this.activateReset();
    this.calculateTip();
    this.activateReset();
    if (this.numVars.tipPercent != 0) {
      this.removeZero(1);
    }
  },
};
