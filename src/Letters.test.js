import lodash from "lodash";

lodash.shuffle = jest.fn();

import { fireEvent, render } from "@testing-library/react";
import Letters from "./Letters";

function getLetterN(container, n) {
  return container.querySelector(`.Letter:nth-child(${n})`);
}

it("shows letter", function () {
  const { getByText } = render(<Letters letters="ABCDEF" center="Z" />);

  const a = getByText("A");
  const b = getByText("B");
  const c = getByText("C");
  const d = getByText("D");
  const e = getByText("E");
  const f = getByText("F");
  const z = getByText("Z");
  expect(a).toBeInTheDocument();
  expect(b).toBeInTheDocument();
  expect(c).toBeInTheDocument();
  expect(d).toBeInTheDocument();
  expect(e).toBeInTheDocument();
  expect(f).toBeInTheDocument();
  expect(z).toBeInTheDocument();
});

it("randomizes", function () {
  lodash.shuffle.mockReturnValueOnce(["A", "B", "C", "D", "F", "E"]);

  const { container } = render(<Letters letters="ABCDEF" center="Z" />);
  expect(getLetterN(container, 6)).toHaveTextContent("E");
  expect(getLetterN(container, 7)).toHaveTextContent("F");

  fireEvent.click(container.querySelector(".Letters-randomize"));
  expect(getLetterN(container, 6)).toHaveTextContent("F");
  expect(getLetterN(container, 7)).toHaveTextContent("E");
});

it("matches snapshot", function () {
  const { container } = render(<Letters letters="ABCDEF" center="Z" />);
  expect(container).toMatchSnapshot();
});
