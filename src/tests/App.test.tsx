import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "components/App";
// import { CharactersApiResponse } from "hooks/custom/api";

// const mockedCharacters: CharactersApiResponse = {
//   info: { count: 1, next: "", pages: 1, prev: "" },
//   results: [
//     {
//       id: 1,
//       name: "Rick Sanchez",
//       status: "Alive",
//       species: "Human",
//       type: "",
//       gender: "Male",
//       origin: {
//         name: "Earth (C-137)",
//         url: "https://rickandmortyapi.com/api/location/1",
//       },
//       location: {
//         name: "Citadel of Ricks",
//         url: "https://rickandmortyapi.com/api/location/3",
//       },
//       image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//       episode: [],
//       url: "https://rickandmortyapi.com/api/character/1",
//       created: "2017-11-04T18:48:46.250Z",
//     },
//   ],
// };
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     ok: true,
//     json: Promise.resolve(mockedCharacters),
//   })
// ) as unknown as typeof fetch;

describe("Test some use cases", () => {
  it("renders app, stars a character and searches it in starred characters tab", async () => {
    //render app and change page
    render(<App />);
    fireEvent.click(screen.getByText(/Characters/i));
    expect(screen.getByText(/Rick and Morty - Characters/i)).toBeVisible();

    //wait for characters and star the first one
    await waitForElementToBeRemoved(screen.queryByText(/Loading/i));
    const star = screen.getAllByAltText("star");
    expect(star[0]).toBeVisible();
    fireEvent.click(star[0]);
    const starFilled = await waitFor(() => screen.findByAltText("starFilled"));
    expect(starFilled).toBeVisible();

    //go to starred characters page and check if the previous character is present
    fireEvent.click(screen.getByText(/Starred/i));
    await waitForElementToBeRemoved(screen.queryByText(/Loading/i));
    expect(screen.getByAltText("starFilled")).toBeVisible();
  });
});
