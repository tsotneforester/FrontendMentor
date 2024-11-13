//  ▄▓█████  ▓▓▓▓▓▓▓▓   ▄▓▓██▄     ▓▓▓▓▓▓   ▄▓█▓█▓▄
// ███       ▓▓▓      ▐▓▓▓  ▓▓▓     ▀▀▓▓▓  ▓▓▓   ▓▓▓
// ███  ███  ▓▓▓▓▓▓▓  ▓▓▓   ▐▓▓▌      ▓▓▓   ▓▓▓█▓▓▄
// ███▄▄███  ▓▓▓      ▐▓▓▄  ▐▓▓▌ ▓▓   ▓▓▓  ▄▄▄   ▓▓▓
//  ▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓  ▀▓▓██▓▓▀  ▓▓▓▓▓▓█   ▀▓▓█▓▓▓▓▀
'use strict';

let engraved_cvc = document.getElementById('engraved-cvc');
let engraved_number = document.getElementById('engraved-number');
let engraved_name = document.getElementById('engraved-name');
let engraved_month = document.getElementById('engraved-month');
let engraved_year = document.getElementById('engraved-year');

let submit = document.getElementsByTagName('button')[0];

let inputs = document.querySelectorAll('input');
let errors = document.querySelectorAll('.error');

let form = document.querySelector('.form');
let success = document.querySelector('.success');

//|||||||||||||||  N A M E input handler ||||||||||||||
inputs[0].addEventListener('input', function () {
  engraved_name.innerHTML = inputs[0].value.toUpperCase();
});
//||||||||||||  N U M B E R input handler |||||||||||
inputs[1].addEventListener('input', function (e) {
  let inputValue = e.target.value.replaceAll(' ', '');

  if (inputValue) {
    let isMoreThan4 = inputValue.match(/\w{4}/g);
    let result = isMoreThan4 ? spaceify(inputValue) : e.target.value;

    engraved_number.innerHTML = result;
    inputs[1].value = result.trim(); //remove last space
  }
});
//||||||||||||  M O N T H input handler |||||||||||
inputs[2].addEventListener('input', function () {
  engraved_month.innerHTML = inputs[2].value;
  inputs[2].value = inputs[2].value.replace(/[^0-9]/g, '');
  if (inputs[2].value > 12) {
    inputs[2].value = 12;
    engraved_month.innerHTML = 12;
  }
});
//||||||||||||  Y E A R input handler |||||||||||
inputs[3].addEventListener('input', function () {
  engraved_year.innerHTML = inputs[3].value;
  inputs[3].value = inputs[3].value.replace(/[^0-9]/g, '');
});
//||||||||||||  CVC input handler |||||||||||
inputs[4].addEventListener('input', function () {
  engraved_cvc.innerHTML = inputs[4].value;
  inputs[4].value = inputs[4].value.replace(/[^0-9]/g, '');
});
//||||||||||||  S U B M I T handler |||||||||||
submit.addEventListener('click', function () {
  for (let i = 0, n = inputs.length; i < n; i++) {
    if (inputs[i].value == '') {
      errors[i].innerHTML = 'Can`t be blank';
      errors[i].style.height = '20px';
      inputs[i].classList.add('errored');
      shakeMe();
    } else {
      errors[i].style.height = '0px';
      errors[i].innerHTML = '';
      inputs[i].classList.remove('errored');
    }
  }

  if (inputs[1].value.replaceAll(' ', '').length > 1 && inputs[1].value.replaceAll(' ', '').length < 16) {
    errors[1].innerHTML = 'Number is too short';
    errors[1].style.height = '20px';
    inputs[1].classList.add('errored');
    shakeMe();
  }

  if (inputs[1].value.replaceAll(' ', '').length == 16) {
    let pattern = /\D+/g;

    if (pattern.test(inputs[1].value.replaceAll(' ', ''))) {
      errors[1].innerHTML = 'Wrong format, numbers only';
      errors[1].style.height = '20px';
      inputs[1].classList.add('errored');
      shakeMe();
    } else {
      errors[1].style.height = '0';
      errors[1].innerHTML = '';
      inputs[1].classList.remove('errored');
    }
  }

  if (inputs[4].value.length < 3 && inputs[4].value.length > 0) {
    errors[4].innerHTML = 'Number is too short';
    errors[4].style.height = '20px';
    inputs[4].classList.add('errored');
    shakeMe();
  }

  if (inputs[4].value.length > 2) {
    errors[4].style.height = '0';
    errors[4].innerHTML = '';
    inputs[4].classList.remove('errored');
  }

  let result = Array.from(errors).every(err => {
    return err.innerHTML == '';
  });
  if (result) {
    form.style.display = 'none';
    success.style.display = 'flex';
  }
});

//||||||||||||||||||||  1   ||||||||||||||||||||||

function spaceify(string) {
  let arr = [...string];
  let n = Math.floor(arr.length / 4);
  for (let i = 0; i < n; i++) {
    arr.splice(4 + 4 * i + i, 0, ' ');
  }
  return arr.join('');
}

//||||||||||||||||||||  2   ||||||||||||||||||||||
function shakeMe() {
  submit.classList.add('active');
  setTimeout(function () {
    submit.classList.remove('active');
  }, 350);
}
