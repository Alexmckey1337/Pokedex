import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="pokedex">Pokedex</Link>
        </li>
        <li>
          <Link to="my_team">My Team</Link>
        </li>
      </ul>
    </nav>
  );
}
