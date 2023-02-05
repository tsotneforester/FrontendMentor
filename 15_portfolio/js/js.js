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
let slideGap = parseInt(getComputedStyle(slide).gap);
let step = imgWidth + slideGap;
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let currentSlide = 0;

next.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide == 3) {
    currentSlide = 2;
    slide.style.transform = `translateX(-${currentSlide * step}px)`;
  } else if (currentSlide > -1) {
    slide.style.transform = `translateX(-${currentSlide * step}px)`;
  } else {
    slide.style.transform = `translateX(${Math.abs(currentSlide) * step}px)`;
  }
});

previous.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide == -3) {
    currentSlide = -2;
    slide.style.transform = `translateX(-${currentSlide * step}px)`;
  } else if (currentSlide > -1) {
    slide.style.transform = `translateX(-${currentSlide * step}px)`;
  } else {
    slide.style.transform = `translateX(${Math.abs(currentSlide) * step}px)`;
  }
});
