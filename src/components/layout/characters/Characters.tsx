import React, { useState } from "react";
import {
  Navigate,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./Characters.css";

export default function Characters() {
  const navigate = useNavigate();
  const location = useLocation();
  const isStarred = location.pathname.endsWith("starred");

  function handleBtnClick() {
    if (isStarred) navigate(-1);
    else navigate("starred");
  }

  return (
    <div className="container characters">
      <h1>Rick and Morty - Characters</h1>
      <button
        type="button"
        className={`btn${isStarred ? " btn-active" : ""}`}
        onClick={handleBtnClick}
      >
        Starred
      </button>
      <Outlet />
    </div>
  );
}
