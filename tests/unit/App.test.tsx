import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../src/views/App";

it("base test", () => {
  const { queryByLabelText, getByLabelText } = render(<App />);
  const element = screen.getByText(/React and TypeScript/i);
  expect(element).toBeInTheDocument();
});
