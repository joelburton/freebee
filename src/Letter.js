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

function Letter({ letter, isCenter=false }) {
  console.debug("* Letter", letter, isCenter);
  return (
    <div className={`Letter ${isCenter ? "Letter-isCenter" : ""}`}>
      <div className="Letter-hex">⬢</div>
      <span>{letter}</span>
    </div>
  );
}

export default Letter;
