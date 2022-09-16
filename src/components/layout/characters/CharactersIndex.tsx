import React from "react";
import Links, { MyLink } from "components/custom/links/Links";
import Loading from "components/custom/loading/Loading";
import { useApiCharacters } from "hooks/custom/api";
import { useSearchParams } from "react-router-dom";
import "./CharactersIndex.css";
import CharacterImgs from "components/custom/character/CharacterImgs";

export default function Characters() {
  const [params] = useSearchParams();
  const pageNumber = Number(params.get("page") ?? 1);
  const characterName = params.get("name");
  const characters = useApiCharacters(
    pageNumber,
    characterName as string | undefined
  );

  const links: MyLink[] = [];

  characters?.info?.prev &&
    links.push({
      name: "Previous Page",
      url: `/characters/?page=${pageNumber - 1}${
        characterName ? "&name=" + characterName : ""
      }`,
    });

  characters?.info?.next &&
    links.push({
      name: "Next Page",
      url: `/characters/?page=${pageNumber + 1}${
        characterName ? "&name=" + characterName : ""
      }`,
    });

  return characters ? (
    characters.results ? (
      <>
        <div className="pagination">
          <Links links={links} />
        </div>
        <CharacterImgs characters={characters.results} />
        <div className="pagination">
          <Links links={links} />
        </div>
      </>
    ) : (
      <p>No characters founded</p>
    )
  ) : (
    <Loading />
  );
}
