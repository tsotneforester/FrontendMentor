const side_name = document.querySelectorAll(".side-name p");
const o_side = document.querySelector("#o-side span");
const screen3 = document.querySelector("#screen3");
const toggle = document.querySelector("#toggle");
const draw_side = document.querySelector("#draw-side span");
const x_side = document.querySelector("#x-side span");
const box = document.querySelectorAll(".inner-box");
const x = document.querySelectorAll(".x");
const o = document.querySelectorAll(".o");
const modal = document.querySelector("#modal");
let humanScore = 0;
let drawScore = 0;
let cpuScore = 0;

let whosTurn = "";

let HUMAN = {
  name: "you",
  side: "x",
  logo: "assets/icon-x.svg",
  selector: document.querySelector("#x-side span"),
};

let CPU = {
  name: "cpu",
  side: "o",
  logo: "assets/icon-o.svg",
  selector: document.querySelector("#o-side span"),
};

// side_name[0].innerHTML = "(" + CPU.name + ")";
// side_name[1].innerHTML = "(" + HUMAN.name + ")";
// HUMAN.selector.innerHTML = humanScore;
// CPU.selector.innerHTML = cpuScore;

function setSide() {
  if (!slider.hasAttribute("style")) {
    HUMAN.side = "x";
    HUMAN.logo = "assets/icon-x.svg";
    HUMAN.selector = document.querySelector("#x-side span");

    CPU.side = "o";
    CPU.logo = "assets/icon-o.svg";
    CPU.selector = document.querySelector("#o-side span");

    side_name[0].innerHTML = "(" + CPU.name + ")";
    side_name[1].innerHTML = "(" + HUMAN.name + ")";
  } else {
    CPU.side = "x";
    CPU.logo = "assets/icon-x.svg";
    CPU.selector = document.querySelector("#x-side span");

    HUMAN.side = "o";
    HUMAN.logo = "assets/icon-o.svg";
    HUMAN.selector = document.querySelector("#o-side span");
    side_name[0].innerHTML = "(" + HUMAN.name + ")";
    side_name[1].innerHTML = "(" + CPU.name + ")";
  }

  draw_side.innerHTML = drawScore;
  HUMAN.selector.innerHTML = humanScore;
  CPU.selector.innerHTML = cpuScore;
}

function humanScores() {
  humanScore++;
  HUMAN.selector.innerHTML = humanScore;
  screen3.removeAttribute("style");
  screen3.style.top = "50%";
  modal.removeAttribute("style");
}
function cpuScores() {
  cpuScore++;
  CPU.selector.innerHTML = cpuScore;
  screen3.removeAttribute("style");
  screen3.style.top = "50%";
  modal.removeAttribute("style");
}
function draw() {
  drawScore++;
  draw_side.innerHTML = drawScore;
  screen3.removeAttribute("style");
  screen3.style.top = "50%";
  modal.removeAttribute("style");
}

function stringify(array, ...n) {
  let text = "";
  for (let i = 0; i < n.length; i++) {
    text += array[n[i]];
  }
  return text;
}

for (let i = 0; i < 9; i++) {
  box[i].addEventListener("mouseenter", function () {
    if (HUMAN.side == "o") {
      x[i].style.display = "none";
      o[i].style.display = "block";
    } else {
      o[i].style.display = "none";
      x[i].style.display = "block";
    }
  });
}

function nextRound() {
  for (var i = 0, il = 9; i < il; i++) {
    if (HUMAN.side == "o") {
      box[i].innerHTML = `<div id="hover">
            <img class="o" src="assets/icon-o-outline.svg" alt="choose" />
          </div>`;
    } else {
      box[i].innerHTML = `<div id="hover">
            <img class="x" src="assets/icon-x-outline.svg" alt="choose" />
          </div>`;
    }

    box[i].removeAttribute("style");
    box[i].setAttribute("value", "E");
  }
  screen3.removeAttribute("style");
  modal.setAttribute("style", "display:none");
  setTurn();
}

function restart() {
  for (var i = 0, il = 9; i < il; i++) {
    box[i].innerHTML = "";
    box[i].removeAttribute("style");
    box[i].setAttribute("value", "E");
  }
}

function quit() {
  location.reload();
}

function iconToggle(e) {
  toggle.innerHTML = `<img src="${e}" alt="" /><span>TURN</span>`;
}

//-------------------------------------------------------
