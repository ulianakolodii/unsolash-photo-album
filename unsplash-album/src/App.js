import React, { useState } from "react";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import Modal from "./components/Modal/Modal";

import classes from "../src/App.css";

function App() {
  const [modalHidden, setModalHidden] = useState(false);
  const handleClickHide = () => {
    setModalHidden(true);
  };

  return (
    <div className="App">
      <PhotoGrid></PhotoGrid>
      <Modal hidden={modalHidden} setHidden={setModalHidden}>
        <span onClick={handleClickHide}></span>
        <img
          className={classes.largePhoto}
          src={
            "https://images.pexels.com/videos/4772983/pexels-photo-4772983.jpeg"
          }
          alt={"broken"}
        />
      </Modal>
    </div>
  );
}

export default App;
