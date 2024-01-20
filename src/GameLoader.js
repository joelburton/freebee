import { useState } from "react";
import { getRandomGame } from "./api";
import Game from "./Game";

/** Loads game data from API and renders game.
 *
 * State:
 * - game: gate data from server (see api.js file)
 * - isLoading: true when actively loading
 *
 * App -> GameLoader -> Game
 *
 */

function GameLoader() {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.info("* GameLoader", game, isLoading);

  async function startGame() {
    setIsLoading(true);

    const game = await getRandomGame();
    setIsLoading(false);
    setGame(game);
  }

  if (!game && !isLoading) {
    return <div><button onClick={startGame}>Start</button></div>;
  }

  if (isLoading) return <div>Loading game...</div>;

  return (
    <Game game={game} />
  );
}

export default GameLoader;
