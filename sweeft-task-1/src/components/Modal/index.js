import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalElement = document.getElementById("modal");

function Modal({ children }) {
  const modalRef = useRef(null);
  if (!modalRef.current) {
    modalRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalElement.appendChild(modalRef.current);

    return () => modalElement.removeChild(modalRef.current);
  }, []);

  return createPortal(
    <div className="input-wrapper">{children}</div>,
    modalRef.current
  );
}

export default Modal;
