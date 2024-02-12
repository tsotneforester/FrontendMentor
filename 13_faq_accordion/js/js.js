//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";

let arrows = document.querySelectorAll(".question img");
let articles = document.querySelectorAll("article");
let questions = document.querySelectorAll(".question span");

//|||||||||||| article listener looped |||||||||||||\

for (let i = 0, count = articles.length; i < count; i++) {
  articles[i].addEventListener("click", () => {
    for (let ii = 0, count = articles.length; ii < count; ii++) {
      articles[ii].classList.remove("active");
      arrows[ii].classList.remove("rotated");
      questions[ii].classList.remove("bold");
    }

    articles[i].classList.toggle("active");
    arrows[i].classList.toggle("rotated");
    questions[i].classList.toggle("bold");
  });
}
