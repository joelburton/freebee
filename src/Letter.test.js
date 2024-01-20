import { render } from "@testing-library/react";
import Letter from "./Letter";

it("renders without crashing", function () {
  render(<Letter letter="A" />);
});

it("shows letter", function () {
  const { container } = render(<Letter letter="A" />);
  const letter = container.querySelector(".Letter");
  expect(Object.values(letter.classList)).toEqual(["Letter"]);
});

it("shows center letter", function () {
  const { container } = render(<Letter letter="A" isCenter />);
  const letter = container.querySelector(".Letter");
  expect(Object.values(letter.classList)).toEqual([
    "Letter",
    "Letter-isCenter",
  ]);
});

it("matches snapshot", function () {
  const { container } = render(<Letter letter="A" />);
  expect(container).toMatchSnapshot();
});

it("matches snapshot: center letter", function () {
  const { container } = render(<Letter letter="A" isCenter />);
  expect(container).toMatchSnapshot();
});
