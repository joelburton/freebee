import { useState } from "react";
import Letters from "./Letters";
import Form from "./Form";
import Feedback from "./Feedback";
import WordList from "./WordList";
import { checkWord } from "./gamelogic";

import "./Game.css";

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
  const [feedback, setFeedback] = useState({});

  console.info("* Game", game, found, feedback);

  /** Try a word and, if good, add to list. Sets feedback w/result. */
  function tryWord(word) {
    word = word.toLowerCase();
    console.log("Game tryWord", word);
    const { msg, ok } = checkWord(word, found, game.center, game.wordlist);
    if (ok) {
      setFound(f => [...f, word]);
    }
    setFeedback({msg, style: ok ? "ok" : "err"});
  }

  return (
    <div className="Game">
        <Letters
          letters={game.letters}
          center={game.center}
        />
        <Form tryWord={tryWord} />
        <Feedback message={feedback.msg} style={feedback.style} />
        <WordList words={found} />
    </div>
  );
}

export default Game;
