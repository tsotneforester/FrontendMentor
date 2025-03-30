export function checkStatus(char, progress, phrase, health) {
  if (!phrase.includes(char) && health == 1) return 'lost';

  let updatedProgress = [...progress, char];

  return phrase.every((char) => updatedProgress.includes(char))
    ? 'won'
    : 'running';
}
