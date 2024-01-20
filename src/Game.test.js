import { getRandomGame } from "./api";

jest.mock("./api");

import { render, waitFor, getByText } from "@testing-library/react";
import Game from "./Game";
import sampleGame from "./sampleGame.json";

it("renders without crashing", function () {
  render(<Game game={sampleGame} />);
});

//
// it("matches snapshot", function () {
//   const {container} = render(<Letters letters="ABC" center="Z"/>);
//   expect(container).toMatchSnapshot();
// });
