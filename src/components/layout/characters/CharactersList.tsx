import React from "react";
import Links, { MyLink } from "components/custom/links/Links";
import Loading from "components/custom/loading/Loading";
import { useApiCharacters } from "hooks/custom/api";
import { useSearchParams } from "react-router-dom";
import "./Characters.css";
import CharacterImg from "components/custom/character/CharacterImg";

export default function Characters() {
  const [params] = useSearchParams();
  const pageNumber = Number(params.get("page") ?? 1);
  const characters = useApiCharacters(pageNumber);

  const links: MyLink[] = [];

  characters?.info.prev &&
    links.push({
      name: "Previous Page",
      path: `/characters/?page=${(pageNumber - 1).toString()}`,
    });

  characters?.info.next &&
    links.push({
      name: "Next Page",
      path: `/characters/?page=${(pageNumber + 1).toString()}`,
    });

  return characters ? (
    <>
      <ul>
        {characters.results.map((character) => (
          <li key={character.id} className="relative">
            <CharacterImg character={character} />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <Links links={links} />
      </div>
    </>
  ) : (
    <Loading />
  );
}
