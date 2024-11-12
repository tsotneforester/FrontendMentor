//  ▄▓█████  ▓▓▓▓▓▓▓▓   ▄▓▓██▄     ▓▓▓▓▓▓   ▄▓█▓█▓▄
// ███       ▓▓▓      ▐▓▓▓  ▓▓▓     ▀▀▓▓▓  ▓▓▓   ▓▓▓
// ███  ███  ▓▓▓▓▓▓▓  ▓▓▓   ▐▓▓▌      ▓▓▓   ▓▓▓█▓▓▄
// ███▄▄███  ▓▓▓      ▐▓▓▄  ▐▓▓▌ ▓▓   ▓▓▓  ▄▄▄   ▓▓▓
//  ▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓  ▀▓▓██▓▓▀  ▓▓▓▓▓▓█   ▀▓▓█▓▓▓▓▀

'use strict';
// Create a media query list for 1120px
const width = 1120;
const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);

// Function to create an aside element and move divs
function createAsideAndMoveDivs(main, divs) {
  const aside = document.createElement('aside');
  main.parentNode.insertBefore(aside, main.nextSibling);

  // Move the last two divs from main to aside
  const lastDivs = Array.from(divs).slice(-2); // Get the last two divs
  lastDivs.forEach(div => aside.appendChild(div));
}

// Function to move divs back to main and remove aside
function moveDivsBackToMain(main, aside) {
  const divs = aside.querySelectorAll('div');
  const lastDivs = Array.from(divs); // Get all divs in aside

  lastDivs.forEach(div => main.appendChild(div)); // Append each div back to main
  aside.remove(); // Remove the aside element
}

// Function to handle media query changes
function handleMediaQuery(e) {
  const main = document.querySelector('main');
  const divs = main.querySelectorAll('div');

  if (e.matches) {
    console.log('Media query at 1120px matched');
    createAsideAndMoveDivs(main, divs);
  } else {
    console.log('Media query at 1120px not matched');
    const aside = document.querySelector('aside');
    if (aside) {
      moveDivsBackToMain(main, aside);
    }
  }
}

// Initial check and event listener for media query changes
handleMediaQuery(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQuery);
