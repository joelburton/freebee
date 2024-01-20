import { checkWord } from "./gamelogic";

test("too short", function () {
  expect(checkWord("cat", [], "c", "cat").ok).toBeFalsy();
})

test("must use center", function () {
  expect(checkWord("cats", [], "b", []).ok).toBeFalsy();
});

test("already found", function () {
  expect(checkWord("cats", ["cats"], "c", ["cats"]).ok).toBeFalsy();
});

test("ok", function () {
  expect(checkWord("cats", ["dogs"], "c", ["cats"]).ok).toBeTruthy();
});

test("invalid", function () {
  expect(checkWord("cats", [], "c", ["dogs"]).ok).toBeFalsy();
});



