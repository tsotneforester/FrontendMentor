//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

let arrow = document.querySelectorAll(".arrow");
let arrowLength = document.querySelectorAll(".arrow").length;
let questions = document.querySelectorAll(".questions");
let question = document.querySelectorAll(".normal");

for (let i = 0; i < arrowLength; i++) {
  arrow[i].addEventListener("click", () => {
    for (let ii = 0; ii < arrowLength; ii++) {
      questions[ii].classList.remove("fix");
      arrow[ii].classList.remove("fix1");
      question[ii].classList.remove("bold");
    }

    questions[i].classList.toggle("fix");
    arrow[i].classList.toggle("fix1");
    question[i].classList.toggle("bold");
  });
}
