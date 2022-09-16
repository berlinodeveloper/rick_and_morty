import Links, { MyLink } from "components/custom/links/Links";
import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const links: MyLink[] = [
  { name: "Home", url: "/" },
  { name: "Characters", url: "/characters" },
];

export default function Layout() {
  return (
    <>
      <header>
        <nav className="container header-nav">
          <Links links={links} />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container">Berlino for BITROCK</div>
      </footer>
    </>
  );
}
