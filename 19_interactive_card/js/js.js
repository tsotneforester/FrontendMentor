//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
let cvcInput = document.getElementById("cvc");
let cvcEngraved = document.getElementById("engraved-cvc");
let numberInput = document.getElementById("number");
let numberEngraved = document.getElementById("engraved-number");
cvcInput.addEventListener("input", function () {
  console.log("first");
  cvcEngraved.innerHTML = cvcInput.value;
});

numberInput.addEventListener("input", function (e) {
  let raw = e.target.value.replaceAll(" ", "");

  if (raw) {
    let rawReg = raw.match(/\d{4}/g);
    let result = rawReg ? zorg(raw) : e.target.value;

    numberEngraved.innerHTML = result;
    numberInput.value = result.trim();
  } else {
    numberEngraved.innerHTML = "0000 0000 0000 0000";
  }
});

let text = "12345";
let result = text.match(/\d{4}/g) || [];

console.log(result.join(" "));

function zorg(string) {
  let zzz = [...string];
  let n = Math.floor(zzz.length / 4);
  console.log(n);
  for (let i = 0; i < n; i++) {
    zzz.splice(4 + 4 * i + i, 0, " ");
    console.log("object");
  }
  return zzz.join("");
}

console.log(zorg("1234252242562345"));

// let sss = "1234-56675";
// let zzz = [...sss];
// zzz.splice(9, 0, "-");
// console.log(zzz.join(""));
