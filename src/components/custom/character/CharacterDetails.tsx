import { Character, useApiEpisodes } from "hooks/custom/api";
import React from "react";
import Loading from "../loading/Loading";
import "./CharacterDetails.css";

export default function CharacterDetails({
  character,
}: {
  character: Character;
}) {
  const characterEpisodesIds = character.episode.map((episodeUrl) =>
    Number(episodeUrl.split("/").pop()!)
  );
  const episodes = useApiEpisodes(characterEpisodesIds);
  return (
    <div className="container character-details">
      <img src={character.image} alt={character.name} />
      <ul>
        {Object.entries(character).map(
          ([key, value]) =>
            !key.match("image|url") && (
              <li key={key}>
                {key.toUpperCase() + ": "}
                {typeof value === "object" ? (
                  Array.isArray(value) ? (
                    episodes ? (
                      <ul>
                        {episodes.map((episode) => (
                          <li key={episode.id}>{episode.name}</li>
                        ))}
                      </ul>
                    ) : (
                      <Loading />
                    )
                  ) : (
                    value.name
                  )
                ) : (
                  value
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
