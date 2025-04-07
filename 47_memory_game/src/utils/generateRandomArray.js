export function generateRandomArray(num) {
  // Create an array with two instances of each number
  const doubleArray = Array.from(
    { length: num * 2 },
    (_, index) => index % num
  );

  // Shuffle the array using Fisher-Yates algorithm
  for (let i = doubleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubleArray[i], doubleArray[j]] = [doubleArray[j], doubleArray[i]];
  }

  return doubleArray;
}

// Example usage:
