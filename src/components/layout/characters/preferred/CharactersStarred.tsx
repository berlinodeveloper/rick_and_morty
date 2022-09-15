import React from "react";
import Loading from "components/custom/loading/Loading";
import { useApiCharactersStarred } from "hooks/custom/api";
import CharacterImg from "components/custom/character/CharacterImg";

export default function CharactersStarred() {
  const characters = useApiCharactersStarred();

  return characters ? (
    characters.length ? (
      <ul>
        {characters.map((character) => (
          <li key={character.id} className="relative">
            <CharacterImg character={character} />
          </li>
        ))}
      </ul>
    ) : (
      <p>No Starred Characters</p>
    )
  ) : (
    <Loading />
  );
}
