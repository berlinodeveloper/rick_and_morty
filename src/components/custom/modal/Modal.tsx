import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const portalRoot = document.getElementById("portal") as HTMLElement;

export default function Modal({ children }: { children: React.ReactNode }) {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    const el = elRef.current;
    portalRoot.appendChild(el);

    return () => {
      portalRoot.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(children, elRef.current);
}
