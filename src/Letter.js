import "./Letter.css";

/** Show a single letter.
 *
 * Props:
 * - letter
 * - isCenter: true if is the center letter
 *
 * Letters -> Letter
 *
 */

function Letter({ letter, isCenter }) {
  console.debug("* Letter", letter, isCenter);
  return (
    <div className={`Letter ${isCenter ? "Letter-isCenter" : ""}`}>
      <span>{letter}</span>
    </div>
  );
}

export default Letter;
