import GameLoader from "./GameLoader";
import Game from "./Game";
import sampleGame from "./sampleGame.json";
import "./App.css";

function App() {
  console.info("* App");
  // use this to get game from API:
  // return <GameLoader />;

  // or this to get game from static example JSON:
  return <Game game={sampleGame} />
}

export default App;
