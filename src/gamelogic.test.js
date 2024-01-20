import { checkWord } from "./gamelogic";

const game = {letters: "atsxyz", center: "c", wordlist: ["cats", "stack"]};

test("too short", function () {
  expect(checkWord("cat", [], game)).toEqual(
    {msg: "Too short!", ok: false});
})

test("must use center", function () {
  expect(checkWord("stay", [], game)).toEqual(
    {msg: "Must use center!", ok: false});
});

test("already found", function () {
  expect(checkWord("cats", ["cats"], game)).toEqual(
    {msg: "Already found!", ok: false});
});

test("invalid", function () {
  expect(checkWord("ccpp", [], game)).toEqual(
    {msg: "Invalid letter!", ok: false});
});

test("invalid", function () {
  expect(checkWord("aacc", [], game)).toEqual(
    {msg: "Invalid word!", ok: false});
});

test("ok", function () {
  expect(checkWord("cats", [], game)).toEqual(
    {msg: "Added: CATS", ok: true});
});
