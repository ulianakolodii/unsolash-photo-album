import React, { useState } from "react";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import Modal from "./components/Modal/Modal";
import { usePhotosQuery } from "./hooks";

import classes from "../src/App.css";

function App() {
  const [image, setImage] = useState("");
  const handleClickHide = () => {
    setImage("");
  };

  const items = usePhotosQuery();

  return (
    <div className="App">
      <PhotoGrid onOpenImage={setImage} items={items} />
      {image && (
        <Modal>
          <span onClick={handleClickHide}></span>
          <img className={classes.largePhoto} src={image} alt="ModalImage" />
        </Modal>
      )}
    </div>
  );
}

export default App;
