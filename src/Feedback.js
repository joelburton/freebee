import "./Feedback.css";

/** Feedback about most recent guess.
 *
 * Props:
 * - message: string
 */

function Feedback({ message, style }) {
  console.info("* Feedback", message, style);
  return <div className={`Feedback Feedback-${style}`}>{message}</div>;
}

export default Feedback;
