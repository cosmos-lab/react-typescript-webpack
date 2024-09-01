import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@/App";

const getInput = (placeholder: string) => screen.getByPlaceholderText(placeholder);

describe("App Component", () => {
  it("renders with default values", () => {
    render(<App />);

    expect(getInput("Label")).toHaveValue("foo");
    expect(getInput("Base count")).toHaveValue("1");
  });
});
