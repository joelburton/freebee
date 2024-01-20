/** Functionality for working with API. */


const URL = "http://localhost:8000/";

/** Get game data from API:
 *  {
 *    "letters": "rstlna",
 *    "center": "e",
 *    "wordlist": ["lane", "slate", ...]
 *  }
 */

async function getRandomGame() {
  console.info("* api.getRandomGame");
  const resp = await fetch(URL);
	const {letters, center, wordlist} = await resp.json()
	console.info("game data", letters, center, wordlist);
  return {letters, center, wordlist};
}

export { getRandomGame };
