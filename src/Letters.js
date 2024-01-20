import { useState } from "react";
import { shuffle } from "lodash";

import Letter from "./Letter";

import "./Letters.css";

/** Letters of game board.
 *
 * Props:
 * - letters: string of non-center letters ("RSTLNA")
 * - center: center letter (eg "E")
 *
 * State:
 * - randomLetters: list of letters as currently arranged
 *
 * Game -> Letters -> { Letter, Letter, ... }
 */

function Letters({ letters, center }) {
  const [randomLetters, setRandomLetters] = useState([...letters]);
  console.info("* Letters", letters, center, randomLetters);

  function randomize() {
    setRandomLetters((letters) => shuffle(letters));
  }

  return (
    <div className="Letters">
      <Letter letter={center} isCenter />
      {randomLetters.map((letter) => (
        <Letter key={letter} letter={letter} />
      ))}
      <button className="Letters-randomize" onClick={randomize}>
        Shuffle
      </button>
    </div>
  );
}

export default Letters;
