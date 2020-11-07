import { render, unmountComponentAtNode } from "@testing-library/react";
import React from "react";
import AnagramCheck from "./AnagramCheck";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

/*
Test Plan
- Check the text and form renders
- Check the initial values of state are ""
- Mock a post request and:
    - Confirm it passes firstWord and secondWord. Then isAnagram is updated with the response
    - If it doesn't error is returned
- Check props are being received from refreshAnagrams()
*/

test("Static Text Display", () => {
  const { getByText } = render(<AnagramCheck />);
  getByText("Anagram Tester");
  getByText("Searches are assumed to be actual words");
});

// test("Initial State Check", () => {
//   const [firstWord, setFirstWord] = render(<AnagramCheck />);
//   expect(firstWord).toBe("")
// });

// test("Props passed from refreshAnagrams()", () => {
//     {}
// });

// test("Props passed", () => {
//     {}
// });

// test("Props passed", () => {
//     {}
// });