// import { ExpansionPanelActions, RootRef } from '@material-ui/core';
import { render, unmountComponentAtNode } from '@testing-library/react';
import React from "react";
import App from './App';
import { act } from "react-dom/test-utils";
import { ExpansionPanelActions } from '@material-ui/core';

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

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders correct content", () => {
//   const root = document.createElement("div");
//   render(<App/>, root);
//   expect(root.querySelector("h1").textContent).toBe("Anagram Tester");
// })

it("renders correct content", () => {
  act(() => {
    render(<App/>, container);
  });
  ExpansionPanelActions(container.textContent).toBe("Anagram Tester");
});
