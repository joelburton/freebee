import { useState } from "react";
import Letters from "./Letters";
import Form from "./Form";
import Feedback from "./Feedback";
import WordList from "./WordList";

/** Main game component
 *
 * Props:
 * - game: game data from API (see api.js)
 *
 * State:
 * - found: list of words player has found
 * - feedback: success/error message from most recent guess
 *
 * GameLoader -> Game -> { Letters, Form, Feedback, WordList }
 */

function Game({ game }) {
  const [found, setFound] = useState([]);
  const [feedback, setFeedback] = useState("");

  console.info("* Game", game, found, feedback);

  function tryWord(word) {
    word = word.toLowerCase();
    console.log("Game tryWord", word, game.center);

    // it might be nice to move this logic out of the React component
    if (!word.includes(game.center)) {
      setFeedback("Must use center letter");
    } else if (word.length < 4) {
      setFeedback("Too short!");
    } else if (found.includes(word)) {
      setFeedback("Already found!");
    } else if (game.wordlist.includes(word)) {
      setFeedback("Added to word list");
      setFound(wl => [...wl, word]);
    } else {
      setFeedback("Not a valid word");
    }
  }

  return (
    <div className="Game">
        <Letters
          letters={game.letters}
          center={game.center}
        />
        <Form tryWord={tryWord} />
        <Feedback message={feedback} />
        <WordList words={found} />
    </div>
  );
}

export default Game;
