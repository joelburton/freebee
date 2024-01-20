/** Check a word & determine result.
 *
 * Returns obj of {msg, ok: true|false}
 */

function checkWord(word, found, center, wordlist) {
  if (word.length < 4) {
    return {msg: "Too short!", ok: false};
  }

  if (!word.includes(center)) {
    return {msg: "Must use center letter", ok: false};
  }

  if (found.includes(word)) {
    return {msg: "Already found!", ok: false};
  }

  if (wordlist.includes(word)) {
    return {msg: `Added: ${word.toUpperCase()}`, ok: true};
  }

  return {msg: "Not a valid word", ok: false};
}


/** Return array of valid words not in found list. */

function getMissingWords(words, found) {
  const foundSet = new Set(found);
  return words.filter(w => !foundSet.has(w));
}


export { checkWord, getMissingWords };