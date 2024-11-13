//  ▄▓█████  ▓▓▓▓▓▓▓▓   ▄▓▓██▄     ▓▓▓▓▓▓   ▄▓█▓█▓▄
// ███       ▓▓▓      ▐▓▓▓  ▓▓▓     ▀▀▓▓▓  ▓▓▓   ▓▓▓
// ███  ███  ▓▓▓▓▓▓▓  ▓▓▓   ▐▓▓▌      ▓▓▓   ▓▓▓█▓▓▄
// ███▄▄███  ▓▓▓      ▐▓▓▄  ▐▓▓▌ ▓▓   ▓▓▓  ▄▄▄   ▓▓▓
//  ▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓  ▀▓▓██▓▓▀  ▓▓▓▓▓▓█   ▀▓▓█▓▓▓▓▀

'use strict';

let data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const periods = document.querySelector('.timeframes');
const currnet = document.querySelectorAll('.card h1');
const last = document.querySelectorAll('.card p');

periods.addEventListener('click', e => {
  let time = e.target.innerText.toLowerCase();
  console.log(time);

  for (let i = 0; i < 6; i++) {
    currnet[i].innerHTML = data[i]['timeframes'][time]['current'] + 'hrs';
    last[i].innerHTML = 'Last Week - ' + data[i]['timeframes'][time]['previous'] + 'hrs';
  }

  Array.from(periods.children).forEach(e => e.classList.remove('active'));
  e.target.classList.add('active');
});
