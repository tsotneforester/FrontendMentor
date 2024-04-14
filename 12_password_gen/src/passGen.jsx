const patterFunctions = [getRandomUpper, getRandomLower, getRandomNumber, getRandomSymbol];

export function generatePassword(n, arr) {
  let pattern = arr.reduce((accumulator, curValue, index) => {
    if (curValue) {
      accumulator.push(patterFunctions[index]);
    }
    return accumulator;
  }, []);

  let PasswordPattern = Array.from({ length: n }, () => {
    return "";
  }) //create empty array of (n) length
    .fill(pattern, 0)
    .flat()
    .slice(0, n)
    .sort(function () {
      return 0.5 - Math.random(); //shuffle array
    });

  return Array.from(PasswordPattern, (e) => {
    return e();
  }).join(""); // Generates password string from pattern
}

//|||||||||||||||||||||| 1 ||||||||||||||||||||||||
function makePattern() {
  pattern = ["lowercase"];
  for (let i = 0, n = checkboxes.length; i < n; i++) {
    if (checkboxes[i].checked) {
      pattern.push(checkboxes[i].value);
    }
  }
}

function getRandomLower() {
  return String.fromCharCode(random(26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(random(26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(random(10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function random(n) {
  return Math.floor(Math.random() * n);
}
