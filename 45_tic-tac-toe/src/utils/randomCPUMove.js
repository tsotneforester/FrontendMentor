export default function (progressArray) {
  // Find all available positions (where the value is null)
  const availablePositions = progressArray
    .map((value, index) => (value === null ? index : null))
    .filter((index) => index !== null);

  // If there are no available positions, return the array as is
  if (availablePositions.length === 0) {
    return progressArray;
  }

  // Select a random index from the available positions
  const randomIndex = Math.floor(Math.random() * availablePositions.length);
  const positionToUpdate = availablePositions[randomIndex];

  return positionToUpdate;
}
