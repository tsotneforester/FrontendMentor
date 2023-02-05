//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
let img = document.querySelector(".slide img");
let imgWidth = parseInt(getComputedStyle(img).width);
let slide = document.querySelector(".slide");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let currentSlide = 0;
console.log(currentSlide);

next.addEventListener("click", function () {
  currentSlide++;
  console.log(currentSlide);
  if (currentSlide == 3) {
    currentSlide = 2;
    slide.style.transform = `translateX(-${currentSlide * imgWidth}px)`;
  } else if (currentSlide > -1) {
    slide.style.transform = `translateX(-${currentSlide * imgWidth}px)`;
  } else {
    slide.style.transform = `translateX(${Math.abs(currentSlide) * imgWidth}px)`;
  }
});

previous.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide > -1) {
    slide.style.transform = `translateX(-${currentSlide * imgWidth}px)`;
  } else {
    slide.style.transform = `translateX(${Math.abs(currentSlide) * imgWidth}px)`;
  }
});
