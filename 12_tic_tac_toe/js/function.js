const side_name = document.querySelectorAll(".side-name p");
const o_side = document.querySelector("#o-side span");
const draw_side = document.querySelector("#draw-side span");
const x_side = document.querySelector("#x-side span");
const box = document.querySelectorAll(".inner-box");
const x = document.querySelectorAll(".x");
const o = document.querySelectorAll(".o");
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

side_name[0].innerHTML = "(" + CPU.name + ")";
side_name[1].innerHTML = "(" + HUMAN.name + ")";
HUMAN.selector.innerHTML = humanScore;
CPU.selector.innerHTML = cpuScore;

// function setSide() {
//   let whyAmI = prompt("'x' or 'o'?");
//   if (whyAmI === "x") {
//     HUMAN.side = "x";
//     HUMAN.logo = "assets/icon-x.svg";
//     HUMAN.selector = document.querySelector("#x-side span");

//     CPU.side = "o";
//     CPU.logo = "assets/icon-o.svg";
//     CPU.selector = document.querySelector("#o-side span");

//     side_name[0].innerHTML = "(" + CPU.name + ")";
//     side_name[1].innerHTML = "(" + HUMAN.name + ")";
//   } else {
//     CPU.side = "x";
//     CPU.logo = "assets/icon-x.svg";
//     CPU.selector = document.querySelector("#x-side span");

//     HUMAN.side = "o";
//     HUMAN.logo = "assets/icon-o.svg";
//     HUMAN.selector = document.querySelector("#o-side span");
//     side_name[0].innerHTML = "(" + HUMAN.name + ")";
//     side_name[1].innerHTML = "(" + CPU.name + ")";
//   }
// }

// setSide();

function setTurn() {
  const rivals = [HUMAN.name, CPU.name];
  let random = Math.floor(Math.random() * 2);
  whosTurn = rivals[random];
  console.log(whosTurn + " - starts the game");
}

setTurn();

function humanScores() {
  humanScore++;
  HUMAN.selector.innerHTML = humanScore;
  for (var i = 0, il = 9; i < il; i++) {
    box[i].innerHTML = "";
    box[i].removeAttribute("style");
  }
}
function cpuScores() {
  cpuScore++;
  CPU.selector.innerHTML = cpuScore;
  for (var i = 0, il = 9; i < il; i++) {
    box[i].innerHTML = "";
    box[i].removeAttribute("style");
  }
}
function draw() {
  drawScore++;
  draw_side.innerHTML = localStorage.drawScore;
  for (var i = 0, il = 9; i < il; i++) {
    box[i].innerHTML = "";
    box[i].removeAttribute("style");
  }
}

function stringify(array, ...n) {
  let text = "";
  for (let i = 0; i < n.length; i++) {
    text += array[n[i]];
  }
  return text;
}

function hover() {
  for (let i = 0; i < box.length; i++) {
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
}
hover();
