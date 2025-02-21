export function formatPopulation(number) {
  // Convert the number to a string and add commas
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  // Convert to millions or billions if needed
  if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + ' billion';
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + ' million';
  } else {
    return formattedNumber; // Return the formatted number with commas
  }
}
