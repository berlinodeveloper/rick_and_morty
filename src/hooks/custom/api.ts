import { MyLink } from "components/custom/links/Links";
import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

export type PaginationInfo = {
  count: number; //The length of the response
  pages: number; //The amount of pages
  next: string; //Link to the next page (if it exists)
  prev: string; //Link to the previous page (if it exists)
};

export type Character = {
  id: number; //The id of the character.
  name: string; //The name of the character.
  status: string; //The status of the character ('Alive', 'Dead' or 'unknown').
  species: string; //The species of the character.
  type: string; //The type or subspecies of the character.
  gender: string; //The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
  origin: MyLink; //Name and link to the character's origin location.
  location: MyLink; //Name and link to the character's last known location endpoint.
  image: string; //Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
  episode: string[]; //List of episodes in which this character appeared.
  url: string; //Link to the character's own URL endpoint.
  created: string;
};

export type CharactersApiResponse = {
  info?: PaginationInfo;
  results?: Character[];
};

export type Episode = {
  id: number; //The id of the episode.
  name: string; //The name of the episode.
  air_date: string; //The air date of the episode.
  episode: string; //The code of the episode.
  characters: string[]; //List of characters who have been seen in the episode.
  url: string; //Link to the episode's own endpoint.
  created: string; //Time at which the episode was created in the database.
};

export function useApiCharacters(
  pageNumber: number = 1,
  name?: Character["name"]
) {
  const [characters, setCharacters] = useState<CharactersApiResponse>();
  useEffect(() => {
    if (process.env.REACT_APP_API_URL) {
      const url = `${
        process.env.REACT_APP_API_URL
      }/character/?page=${pageNumber}${name ? "&name=" + name : ""}`;

      fetch(url).then(async (res) =>
        setCharacters(res.ok ? await res.json() : {})
      );
    }
  }, [pageNumber, name]);

  return characters;
}

export function useApiCharactersStarred() {
  const [characters, setCharacters] = useState<Character[]>();
  const charactersStarred = useAppSelector((state) => state.charactersStarred);

  useEffect(() => {
    if (process.env.REACT_APP_API_URL && charactersStarred.length) {
      const url = `${
        process.env.REACT_APP_API_URL
      }/character/${charactersStarred.toString()}`;

      fetch(url).then(async (res) => {
        const characters = await res.json();
        setCharacters(Array.isArray(characters) ? characters : [characters]);
      });
    } else setCharacters([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return characters;
}

export function useApiEpisodes(episodesIds: Episode["id"][]) {
  const [episodes, setEpisodes] = useState<Episode[]>();

  useEffect(() => {
    if (process.env.REACT_APP_API_URL && episodesIds.length) {
      const url = `${
        process.env.REACT_APP_API_URL
      }/episode/${episodesIds.toString()}`;

      fetch(url).then(async (res) => {
        const episodes = await res.json();
        setEpisodes(Array.isArray(episodes) ? episodes : [episodes]);
      });
    } else setEpisodes([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return episodes;
}
