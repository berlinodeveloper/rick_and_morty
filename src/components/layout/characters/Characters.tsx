import React, { useEffect, useState } from "react";
import {
  Navigate,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./Characters.css";
import search from "assets/icons/search.png";

export default function Characters() {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const isStarred = location.pathname.endsWith("starred");

  useEffect(() => {
    if (name) navigate(`/characters/?name=${name}`);
    else navigate("/characters");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  function handleBtnClick() {
    if (isStarred) navigate(-1);
    else navigate("/characters/starred");
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div className="container characters">
      <h1>Rick and Morty - Characters</h1>
      <div className="characters-input">
        <button
          type="button"
          className={`btn${isStarred ? " btn-active" : ""}`}
          onClick={handleBtnClick}
        >
          Starred
        </button>
        <label>
          <img src={search} alt="search-icon" />
          <input
            type="text"
            name="search"
            id="search"
            value={name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <Outlet />
    </div>
  );
}
