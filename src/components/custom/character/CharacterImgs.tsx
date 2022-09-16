import { Character } from "hooks/custom/api";
import React from "react";
import CharacterImg from "./CharacterImg";

export default function CharacterImgs({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id} className="relative">
          <CharacterImg character={character} />
        </li>
      ))}
    </ul>
  );
}
