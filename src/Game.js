import { useState } from "react";
import Letters from "./Letters";
import Form from "./Form";
import Feedback from "./Feedback";
import WordList from "./WordList";
import { checkWord, getMissingWords } from "./gamelogic";

import "./Game.css";

/** Main game component
 *
 * Props:
 * - game: game data from API (see api.js)
 *
 * State:
 * - found: list of words player has found
 * - feedback: success/error message from most recent guess
 * - showMissing: show missing words if true
 *
 * GameLoader -> Game -> { Letters, Form, Feedback, WordList }
 */

function Game({ game }) {
  const [found, setFound] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [showMissing, setShowMissing] = useState(false);
  const missing = getMissingWords(game.wordlist, found);

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
      { found.length > 0 &&
        <div>
          <h3>Found
            {" "}<small>({found.length})</small>
          </h3>
          <WordList words={found} />
        { showMissing
          ? <div>
              <h3>Not Found
                {" "}<small>({missing.length})</small>

              </h3>
              <WordList words={missing} />
            </div>
          : <button
              onClick={() => setShowMissing(true)}>
                Show {missing.length} missing
            </button>
        }
        </div>
      }
    </div>
  );
}

export default Game;
