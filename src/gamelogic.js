/** Check a word & determine result.
 *
 * Returns obj of {msg, ok: true|false}
 */

function checkWord(word, found, game) {
  if (word.length < 4) {
    return {msg: "Too short!", ok: false};
  }

  if (!word.includes(game.center)) {
    return {msg: "Must use center!", ok: false};
  }

  if ([...word].some(ltr =>
    !(game.letters.includes(ltr) || game.center === ltr))) {
    return {msg: "Invalid letter!", ok: false};
  }

  if (found.includes(word)) {
    return {msg: "Already found!", ok: false};
  }

  if (!game.wordlist.includes(word)) {
    return {msg: "Invalid word!", ok: false};
  }

  return {msg: `Added: ${word.toUpperCase()}`, ok: true};
}


/** Return array of valid words not in found list. */

function getMissingWords(words, found) {
  const foundSet = new Set(found);
  return words.filter(w => !foundSet.has(w));
}


export { checkWord, getMissingWords };