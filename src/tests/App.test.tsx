import React from "react";
import { render, screen } from "@testing-library/react";
import App from "components/App";

test("renders app", () => {
  render(<App />);
  const homeTitle = screen.getByText(/Rick and Morty - Home/i);

  expect(homeTitle).toBeVisible();
});
