import "./WordList.css";

/** List of words player has found.
 *
 * Props:
 * - words
 *
 * Game -> WordList
 */

function WordList({ words }) {
  console.info("* WordList", words);

  return (
    <ul className="WordList">
      {words.map((word) => (
        <li key={word}>{word}</li>
      ))}
    </ul>
  );
}

export default WordList;
