import React, { memo } from "react";
import classes from "./styles.module.css";
import PhotoItem from "../PhotoItem/PhotoItem";
import { usePhotosQuery } from "../../hooks";


const handleClick = () => {

};

const PhotoGrid = memo(() => {
  const data = usePhotosQuery();
  return (
    <div className={classes.photoGrid}>
      {data && data.map(
        el => <PhotoItem key={el.id} image={el.urls.regular} title={el?.sponsorship?.tagline || ''} author={el.user.name} onClick={handleClick} />
      )}
    </div>
  );
});

export default PhotoGrid;