import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const portalRoot = document.getElementById("portal") as HTMLElement;

export default function Modal({
  children,
  setShowModal,
}: {
  children: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const elRef = useRef(document.createElement("div"));

  function handleContainerClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.target === e.currentTarget && setShowModal(false);
  }

  useEffect(() => {
    const el = elRef.current;
    portalRoot.appendChild(el);

    return () => {
      portalRoot.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal" onClick={handleContainerClick}>
      {children}
    </div>,
    elRef.current
  );
}
