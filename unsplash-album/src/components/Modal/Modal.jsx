import React from "react";
import "./styles.css";

const ImageModal = ({ hidden, setHidden, children }) => {
  return (
    <div
      className={hidden ? "overlayHidden" : "overlay"}
      onClick={() => setHidden(true)}
    >
      <div className="container">{children}</div>
    </div>
  );
};

export default ImageModal;
