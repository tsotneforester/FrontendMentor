//  ▄▓█████  ▓▓▓▓▓▓▓▓   ▄▓▓██▄     ▓▓▓▓▓▓   ▄▓█▓█▓▄
// ███       ▓▓▓      ▐▓▓▓  ▓▓▓     ▀▀▓▓▓  ▓▓▓   ▓▓▓
// ███  ███  ▓▓▓▓▓▓▓  ▓▓▓   ▐▓▓▌      ▓▓▓   ▓▓▓█▓▓▄
// ███▄▄███  ▓▓▓      ▐▓▓▄  ▐▓▓▌ ▓▓   ▓▓▓  ▄▄▄   ▓▓▓
//  ▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓  ▀▓▓██▓▓▀  ▓▓▓▓▓▓█   ▀▓▓█▓▓▓▓▀
'use strict';

const forms = document.querySelectorAll('form');
const submits = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const errors = document.querySelectorAll('.error');
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

forms.forEach(e => {
  e.addEventListener('submit', function (e) {
    e.preventDefault();
  });
});

for (let i = 0; i < 2; i++) {
  submits[i].addEventListener('click', function () {
    let text = inputs[i].value;
    if (!reg.test(text)) {
      inputs[i].style.border = '#EF4877 solid 1px';
      errors[i].removeAttribute('style');
    } else {
      inputs[i].removeAttribute('style');
      errors[i].style.display = 'none';
    }
  });
}
