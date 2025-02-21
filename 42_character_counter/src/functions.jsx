export function getMostFrequentCharacters(text) {
  const charCount = {};

  let pattern = /[A-Za-z0-9ა-ჰ]/; // Regular expression to match "hello"

  for (const char of text) {
    if (pattern.test(char)) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  return Object.entries(charCount)
    .map(([character, count]) => ({ character, count }))
    .sort((a, b) => b.count - a.count);
}

export function setLimitExceded(str, excludeSpaces, limit) {
  return limit * 1 < countChars(str, excludeSpaces);
}

export function countChars(str, excludeSpaces) {
  if (excludeSpaces) {
    return str.replace(/\s/g, '').length;
  } else {
    return str.length; // Return the original length
  }
}

export function countSentences(text) {
  if (text === '') {
    return 0; // Handle empty string
  }

  const fullStopCount = (text.match(/\./g) || []).length; // Use regex for full stops
  const exclamationCount = (text.match(/!/g) || []).length;
  const questionCount = (text.match(/\?/g) || []).length;

  const totalSentences = fullStopCount + exclamationCount + questionCount;
  return totalSentences;
}

export function countWords(text) {
  if (text.trim() === '') {
    // Handle empty or whitespace-only strings
    return 0;
  }

  const words = text.trim().split(/\s+/); // Split by any whitespace
  return words.length;
}

export function calculateReadingTime(text) {
  const wordsPerMinute = 200;

  const readingTime = countWords(text) / wordsPerMinute;
  return Math.ceil(readingTime);
}

export function formatSeconds(seconds) {
  return seconds.toString().padStart(2, '0');
}
