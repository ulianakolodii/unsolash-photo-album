import React, {useState} from "react";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
import Modal from "./components/Modal/Modal";
// import {usePhotosQuery} from "./hooks/usePhotosQuery";
import classes from "../src/App.css";

function App() {
const [isShown, setIsShown] = useState(true);
const handleClick = () => {
  setIsShown(current => !current);
};

  // const data = usePhotosQuery();
  return (
    <div className="App">
      <PhotoGrid></PhotoGrid>
      <div style={{display: isShown ? 'flex' : 'none'}}><Modal><span onClick={handleClick}></span><img className={classes.largePhoto} src={"https://images.pexels.com/videos/4772983/pexels-photo-4772983.jpeg"} alt={"broken"}/></Modal></div> 
    </div>
  );
}

export default App;
