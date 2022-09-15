import React from "react";
import background from "assets/img/background.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="container home">
      <h1>Rick and Morty - Home</h1>
      <img src={background} alt="background" />
    </div>
  );
}
