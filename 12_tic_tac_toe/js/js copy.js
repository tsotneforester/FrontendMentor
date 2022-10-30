"use strict";

setSide();

// var table = document.getElementById("game-table");
// var xwins = document.getElementById("xwins");
// var ywins = document.getElementById("ywins");
// var draw_wins = document.getElementById("draw_wins");
// var box = document.querySelectorAll(".box");
// var isToggling = false;
// let humanScore = 0;
// let cpuScore = 0;
// let drawscore = 0;

// for (let i = 0; i < box.length; i++) {
//   box[i].addEventListener("click", function () {
//     box[i].style.height = "92px";
//     box[i].style.boxShadow = "inset 0px -4px 0px #10212a";
//   });
// }

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

function computerMove() {
  // setTimeout(function () {
  if (whosTurn == "cpu") {
    let myarray = [];
    for (var i = 0, il = box.length; i < il; i++) {
      if (box[i].getAttribute("value") === "E") {
        myarray.push(i);
      }
    }
    let randomEmpty = myarray[Math.floor(Math.random() * myarray.length)];
    box[randomEmpty].style.height = "92px";
    box[randomEmpty].style.boxShadow = "inset 0px -4px 0px #10212a";
    box[randomEmpty].innerHTML = "";

    let img = document.createElement("img");
    img.setAttribute("src", CPU.logo);
    box[randomEmpty].appendChild(img);
    box[randomEmpty].setAttribute("value", CPU.side);
    whosTurn = "you";
    checkstatusCpu();
  }
}

computerMove();

function humanMove() {
  // console.log("human - " + HUMAN.side);
  // console.log("cpu - " + CPU.side);
  if (whosTurn == "you") {
    for (var i = 0, il = 9; i < il; i++) {
      box[i].addEventListener("click", function () {
        this.style.height = "92px";
        this.style.boxShadow = "inset 0px -4px 0px #10212a";
        this.innerHTML = "";
        this.setAttribute("value", HUMAN.name);

        let img = document.createElement("img");
        img.setAttribute("src", HUMAN.logo);
        this.appendChild(img);
        whosTurn = "cpu";
        checkstatusHuman();
      });
    }
  }
}

humanMove();

function checkstatusHuman() {
  let progress_array = [];
  for (var i = 0, il = 9; i < il; i++) {
    progress_array.push(box[i].getAttribute("value"));
  }
  console.log(progress_array);

  if (stringify(progress_array, 0, 1, 2) === HUMAN.name.repeat(3)) {
    progress_array = [];
    humanScores();
  } else if (stringify(progress_array, 3, 4, 5) === HUMAN.name.repeat(3)) {
    progress_array = [];
    humanScores();
  } else if (stringify(progress_array, 6, 7, 8) === HUMAN.name.repeat(3)) {
    progress_array = [];
    humanScores();
  } else if (stringify(progress_array, 0, 3, 6) === HUMAN.name.repeat(3)) {
    progress_array = [];
    humanScores();
  } else if (stringify(progress_array, 1, 4, 7) === HUMAN.name.repeat(3)) {
    progress_array = [];
    humanScores();
  } else if (stringify(progress_array, 2, 5, 8) === HUMAN.name.repeat(3)) {
    progress_array = [];
    humanScores();
  } else if (stringify(progress_array, 0, 4, 8) === HUMAN.name.repeat(3)) {
    progress_array = [];
    humanScores();
  } else if (stringify(progress_array, 2, 4, 6) === HUMAN.name.repeat(3)) {
    progress_array = [];
    humanScores();
  } else {
    if (!progress_array.includes("E")) {
      draw();
    } else {
      computerMove();
    }
  }
}

function checkstatusCpu() {
  let progress_array = [];
  for (var i = 0, il = 9; i < il; i++) {
    progress_array.push(box[i].getAttribute("value"));
  }
  console.log(progress_array);

  if (stringify(progress_array, 0, 1, 2) === CPU.side.repeat(3)) {
    progress_array = [];
    cpuScores();
  } else if (stringify(progress_array, 3, 4, 5) === CPU.side.repeat(3)) {
    progress_array = [];
    cpuScores();
  } else if (stringify(progress_array, 6, 7, 8) === CPU.side.repeat(3)) {
    progress_array = [];
    cpuScores();
  } else if (stringify(progress_array, 0, 3, 6) === CPU.side.repeat(3)) {
    progress_array = [];
    cpuScores();
  } else if (stringify(progress_array, 1, 4, 7) === CPU.side.repeat(3)) {
    progress_array = [];
    cpuScores();
  } else if (stringify(progress_array, 2, 5, 8) === CPU.side.repeat(3)) {
    progress_array = [];
    cpuScores();
  } else if (stringify(progress_array, 0, 4, 8) === CPU.side.repeat(3)) {
    progress_array = [];
    cpuScores();
  } else if (stringify(progress_array, 2, 4, 6) === CPU.side.repeat(3)) {
    progress_array = [];
    cpuScores();
  } else {
    if (!progress_array.includes("E")) {
      draw();
    }
  }
}
