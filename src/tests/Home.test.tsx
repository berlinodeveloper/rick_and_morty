import { render, screen } from "@testing-library/react";
import Home from "components/layout/home/Home";

it("renders home", () => {
  render(<Home />);
  expect(screen.getByText("Rick and Morty - Home")).toBeVisible();
});
