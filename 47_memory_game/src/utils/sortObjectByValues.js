export function sortObjectByValues(obj, numberOfplayers) {
  // Convert the object to an array of [key, value] pairs
  const entries = Object.entries(obj);

  // Sort the array by values (the second element of each pair)
  entries.sort((a, b) => b[1] - a[1]);

  // Convert the sorted array back to an object
  return {
    sortedEntries: entries.slice(0, numberOfplayers),
    maxPair: entries[0][1],
  };
}
