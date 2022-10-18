var table = document.getElementById("game-table");
var xwins = document.getElementById("xwins");
var ywins = document.getElementById("ywins");
var draw_wins = document.getElementById("draw_wins");
var tableEntry = document.querySelectorAll(".box");
var isToggling = false;
let xscore = 0;
let yscore = 0;
let drawscore = 0;

function click_sound_for(n) {
  let audio1 = new Audio(`sounds/${n}.mp3`);
  audio1.play();
}

function stringify(array, ...n) {
  let text = "";
  for (let i = 0; i < n.length; i++) {
    text += array[n[i]];
  }
  return text;
}

function blink_line(array, time, string, ...n) {
  setTimeout(() => {
    for (let i = 0; i < n.length; i++) {
      tableEntry[n[i]].innerHTML = string;
    }
  }, time);
}

// function zorgify2(array, x, ...n) {
//   setTimeout(() => {
//     for (let i = 0; i < n.length; i++) {
//       tableEntry[n[i]].innerHTML = "X";
//     }
//   }, x);
// }

function x_scores() {
  setTimeout(function () {
    xscore++;
    xwins.innerHTML = xscore;
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      tableEntry[i].innerHTML = "";
    }
    click_sound_for("z");
  }, 1000);
}
function y_scores() {
  setTimeout(function () {
    yscore++;
    ywins.innerHTML = yscore;
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      tableEntry[i].innerHTML = "";
    }
    click_sound_for("z");
  }, 1000);
}
function draw() {
  setTimeout(function () {
    drawscore++;
    draw_wins.innerHTML = drawscore;
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      tableEntry[i].innerHTML = "";
    }
    click_sound_for("z");
  }, 1000);
}

function checkstatus() {
  let progress_array = [];
  for (var i = 0, il = tableEntry.length; i < il; i++) {
    progress_array.push(tableEntry[i].innerHTML);
  }

  if (stringify(progress_array, 0, 1, 2) === "XXX") {
    console.log("hi");
    blink_line(progress_array, 100, "", 0, 1, 2);
    blink_line(progress_array, 300, "X", 0, 1, 2);
    blink_line(progress_array, 500, "", 0, 1, 2);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 3, 4, 5) === "XXX") {
    console.log("hi");
    blink_line(progress_array, 100, "", 3, 4, 5);
    blink_line(progress_array, 300, "X", 3, 4, 5);
    blink_line(progress_array, 500, "", 3, 4, 5);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 6, 7, 8) === "XXX") {
    console.log("hi");
    blink_line(progress_array, 100, "", 6, 7, 8);
    blink_line(progress_array, 300, "X", 6, 7, 8);
    blink_line(progress_array, 500, "", 6, 7, 8);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 0, 3, 6) === "XXX") {
    console.log("hi");
    blink_line(progress_array, 100, "", 0, 3, 6);
    blink_line(progress_array, 300, "X", 0, 3, 6);
    blink_line(progress_array, 500, "", 0, 3, 6);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 1, 4, 7) === "XXX") {
    console.log("hi");
    blink_line(progress_array, 100, "", 1, 4, 7);
    blink_line(progress_array, 300, "X", 1, 4, 7);
    blink_line(progress_array, 500, "", 1, 4, 7);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 2, 5, 8) === "XXX") {
    console.log("hi");
    blink_line(progress_array, 100, "", 2, 5, 8);
    blink_line(progress_array, 300, "X", 2, 5, 8);
    blink_line(progress_array, 500, "", 2, 5, 8);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 0, 4, 8) === "XXX") {
    console.log("hi");
    blink_line(progress_array, 100, "", 0, 4, 8);
    blink_line(progress_array, 300, "X", 0, 4, 8);
    blink_line(progress_array, 500, "", 0, 4, 8);
    progress_array = [];
    x_scores();
  } else if (stringify(progress_array, 2, 4, 6) === "XXX") {
    console.log("hi");
    blink_line(progress_array, 100, "", 2, 4, 6);
    blink_line(progress_array, 300, "X", 2, 4, 6);
    blink_line(progress_array, 500, "", 2, 4, 6);
    progress_array = [];
    x_scores();
  } else {
    if (!progress_array.includes("")) {
      draw();
    } else {
      computerMove();
    }
  }
}

function computerMove() {
  setTimeout(function () {
    let myarray = [];
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      if (tableEntry[i].innerHTML === "") {
        myarray.push(i);
      }
    }
    let zorg = myarray[Math.floor(Math.random() * myarray.length)];
    tableEntry[zorg].innerHTML = "O";
    click_sound_for("o");

    let progress_array = [];
    for (var i = 0, il = tableEntry.length; i < il; i++) {
      progress_array.push(tableEntry[i].innerHTML);
    }

    if (stringify(progress_array, 0, 1, 2) === "OOO" || stringify(progress_array, 3, 4, 5) === "OOO" || stringify(progress_array, 6, 7, 8) === "OOO" || stringify(progress_array, 0, 3, 6) === "OOO" || stringify(progress_array, 1, 4, 7) === "OOO" || stringify(progress_array, 2, 5, 8) === "OOO" || stringify(progress_array, 0, 4, 8) === "OOO" || stringify(progress_array, 2, 4, 6) === "OOO") {
      progress_array = [];
      y_scores();
    }
  }, 1000);
}

function toggle(e) {
  if (e.target.innerHTML == "") {
    e.target.innerHTML = "X";
    click_sound_for("x");
    checkstatus();
  }
}

function startGame() {
  for (var i = 0, il = tableEntry.length; i < il; i++) {
    tableEntry[i].onclick = toggle;
  }
}

startGame();
