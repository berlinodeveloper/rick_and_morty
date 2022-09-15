import { Character } from "hooks/custom/api";
import React, { useState } from "react";
import "./CharacterImg.css";

import star from "assets/icons/star.png";
import starFilled from "assets/icons/starFilled.png";
import { useAppDispatch, useAppSelector } from "hooks/redux/hooks";
import { toggle } from "hooks/redux/charactersStarred";
import Modal from "../modal/Modal";

export default function CharacterImg({ character }: { character: Character }) {
  const charactersStarred = useAppSelector((state) => state.charactersStarred);
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  function handleClickImage() {
    setShowModal(true);
  }

  function handleClickStar(e: React.MouseEvent<HTMLImageElement>) {
    dispatch(toggle(character.id));
  }

  return (
    <>
      <img
        src={character.image}
        alt={character.name}
        onClick={handleClickImage}
        className="character-img"
      />
      <img
        src={charactersStarred.includes(character.id) ? starFilled : star}
        alt={charactersStarred.includes(character.id) ? "starFilled" : "star"}
        onClick={handleClickStar}
        className="absolute character-star"
      />
      {showModal && <Modal>Ciao</Modal>};
    </>
  );
}
