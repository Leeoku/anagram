import { render, unmountComponentAtNode } from "@testing-library/react";
import React from "react";
import App from './App';
import axios from "axios";

/*Test Plan
Test JSON data is accepted and the data returns an array in processYourResponse
*/

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

jest.mock("axios");

// test("Good response", () => {
//   axios.get.mockImplementation(() =>
//     Promise.resolve({
//       data: [
//         [["wolf", "flow"], 4],
//         [["on", "no"], 77],
//       ],
//     })
//   );
//   expect mockRefreshAnagrams.mock.response
//   // ...
// });