let screen_1 = document.querySelector("#screen1");
let screen_2 = document.querySelector("#screen2");
let screen_3 = document.querySelector("#screen3");

let slider = document.querySelector("#slider");
let slider_x = document.querySelector("#slider-x");
let slider_x_svg = document.querySelector("#slider-x svg path");
let slider_o = document.querySelector("#slider-o");
let slider_o_svg = document.querySelector("#slider-o svg path");
slider_o.addEventListener("click", function () {
  slider.style.transform = "translateX(200px)";
  slider_x_svg.style.fill = "#a8bfc9";
  slider_o_svg.style.fill = "#1a2a33";
});

slider_x.addEventListener("click", function () {
  if (slider.hasAttribute("style")) {
    slider.removeAttribute("style");
    slider_o_svg.style.fill = "#a8bfc9";
    slider_x_svg.style.fill = "#1a2a33";
  }
});

let vs_cpu = document.querySelector("#vs-cpu");

vs_cpu.addEventListener("click", function () {
  screen_1.style.display = "none";
  screen_2.removeAttribute("style");
  setSide();
  setTurn();
});
