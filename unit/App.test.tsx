import { act, render, screen, waitFor } from "@testing-library/react";
import App from "@/App";

describe("base test", async () => {
  act(() => {
    render(<App />);
  });
  const element = await waitFor(() => screen.getByText(/React and TypeScript/i));
});
