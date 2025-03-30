export function updateHealth(char, phrase) {
  return phrase.includes(char) ? 0 : -1;
}
