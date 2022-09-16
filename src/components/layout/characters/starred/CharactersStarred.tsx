import React from "react";
import Loading from "components/custom/loading/Loading";
import { useApiCharactersStarred } from "hooks/custom/api";
import CharacterImgs from "components/custom/character/CharacterImgs";

export default function CharactersStarred() {
  const characters = useApiCharactersStarred();

  return characters ? (
    characters.length ? (
      <CharacterImgs characters={characters} />
    ) : (
      <p>No Starred Characters</p>
    )
  ) : (
    <Loading />
  );
}
