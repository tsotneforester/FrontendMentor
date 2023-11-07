//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

const submit = document.querySelectorAll("input[type='submit']");
const input = document.querySelectorAll("input[type='email']");
const h6 = document.querySelectorAll("h6");
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

for (let i = 0; i < 2; i++) {
  submit[i].addEventListener("click", function () {
    let text = input[i].value;
    if (!reg.test(text)) {
      input[i].style.border = "#EF4877 solid 1px";
      h6[i].removeAttribute("style");
    } else {
      input[i].removeAttribute("style");
      h6[i].style.display = "none";
    }
  });
}
