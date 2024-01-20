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

export { checkWord };