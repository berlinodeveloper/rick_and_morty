import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Characters from "./layout/characters/Characters";
import CharactersList from "./layout/characters/CharactersIndex";
import Home from "./layout/home/Home";
import CharactersStarred from "./layout/characters/starred/CharactersStarred";
import { Provider } from "react-redux";
import store from "hooks/redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="characters" element={<Characters />}>
              <Route index element={<CharactersList />} />
              <Route path="starred" element={<CharactersStarred />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
