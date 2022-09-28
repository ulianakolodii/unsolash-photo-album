import React from "react";
import classes from "./styles.module.css";

const PhotoItem = ({ image, title, author, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div className={classes.photoItem} onClick={handleClick}>
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
