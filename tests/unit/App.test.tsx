import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "../../src/views/App";

it("base test", async () => {
  act(() => {
    render(<App />);
  });
  const element = await waitFor(() => screen.getByText(/React and TypeScript/i));
  expect(element).toBeInTheDocument();
});
