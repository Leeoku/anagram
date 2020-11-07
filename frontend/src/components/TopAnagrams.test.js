import { render, unmountComponentAtNode } from "@testing-library/react";
import React from "react";
import TopAnagrams from "./TopAnagrams";

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
- Test table renders
*/

// test("Table Render", () => {
//   const { getByText } = render(<TopAnagrams />);
//   getByText("Anagram Tester");
//   getByText("Searches are assumed to be actual words");
// });