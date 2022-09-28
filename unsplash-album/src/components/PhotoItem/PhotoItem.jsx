import React from "react";
import classes from "./styles.module.css";

const PhotoItem = ({ image, title, author, active, setActive }) => {
  return (
    <div className={classes.photoItem} onClick={() => setActive(true)}>
      <div className={classes.photoWarapper}>
        <img
          className={classes.photoImage}
          src={image}
          alt="failed to upload"
        />
      </div>
      <span>{title}</span>
      <div className={classes.photoAuthur}>{author}</div>
    </div>
  );
};

export default PhotoItem;
