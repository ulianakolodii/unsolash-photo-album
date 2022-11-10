import React from "react";
import classes from "./styles.module.css";
import PhotoItem from "../PhotoItem/PhotoItem";

const PhotoGrid = ({ onOpenImage, items }) => (
  <div className={classes.photoGrid}>
    {items &&
      items.map((el) => (
        <PhotoItem
          onClick={onOpenImage}
          key={el.id}
          image={el.urls.regular}
          title={el?.sponsorship?.tagline || ""}
          author={el.user.name}
        />
      ))}
  </div>
);

export default PhotoGrid;
