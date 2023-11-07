//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const boxes = document.querySelectorAll(".box");

boxes.forEach((e) => {
  e.addEventListener("mouseover", function () {
    boxes.forEach((e) => {
      e.style.filter = "grayscale(1)";
    });
    e.style.backgroundPosition = "48% 0%";
    e.style.filter = "grayscale(0)";
  });

  e.addEventListener("mouseout", function () {
    e.style.backgroundPosition = "-20% 0%";
    boxes.forEach((e) => {
      e.style.filter = "grayscale(0)";
    });
  });
});
