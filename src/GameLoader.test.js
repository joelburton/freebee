import { getRandomGame } from "./api";

jest.mock("./api");

import { render, waitFor, getByText } from "@testing-library/react";
import GameLoader from "./GameLoader";

// const AxiosMockAdapter = require("axios-mock-adapter");
// const axios = require("axios");
// const axiosMock = new AxiosMockAdapter(axios);

it("renders without crashing", function () {
  getRandomGame.mockReturnValue({
    center: "a",
    letters: "bcdefg",
    wordlist: ["bare", "bear"],
  });
  render(<GameLoader />);
});

it("gets data from API", async function () {
  getRandomGame.mockReturnValue({
    center: "a",
    letters: "bcdefg",
    wordlist: ["bare", "bear"],
  });

  const { container, debug } = render(<GameLoader />);

  getByText(container, "Start").click();

  const letters = await waitFor(
    () => expect(container.querySelector(".Letters")).toBeInTheDocument(),
    { timeout: 500 }
  );
  debug(letters);
});
