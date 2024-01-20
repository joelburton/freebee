import { useState } from "react";
import "./Form.css";

/** Form to guess a word.
 *
 * Props:
 * - tryWord(word): fn to call on submit
 *
 * State:
 * - word: word being entered
 */

function Form({ tryWord }) {
  const [word, setWord] = useState("");
  console.debug("* Form", word);

  function handleChange(evt) {
   setWord(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    tryWord(word);
    setWord("");
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input value={word} onChange={handleChange} />
    </form>
  );
}

export default Form;
