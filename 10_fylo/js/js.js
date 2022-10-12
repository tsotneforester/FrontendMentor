// var redBox = document.getElementById('...')
"use strict";

const submit = document.querySelectorAll("input[type='submit']");
const input = document.querySelectorAll("input[type='email']");
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

for (let i = 0; i < 2; i++) {
  submit[i].addEventListener("click", function () {
    let text = input[i].value;
    if (!reg.test(text)) {
      input[i].style.outline = "#EF4877 solid 0.7px";
    } else {
      input[i].removeAttribute("style");
    }
  });
}
