import React from "react";
import { NavLink } from "react-router-dom";

export type MyLink = {
  name: string;
  path: string;
};

export default function Links({ links }: { links: MyLink[] }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}
