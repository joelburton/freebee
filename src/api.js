/** Functionality for working with API. */


const URL = "https://wmpymxey5pu6nny6jcooe5clpi0riucb.lambda-url.us-west-1.on.aws";

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
