import React, { memo, useState } from "react";
import classes from "./styles.module.css";
import PhotoItem from "../PhotoItem/PhotoItem";
import { usePhotosQuery } from "../../hooks";

const PhotoGrid = memo(() => {
  const data = usePhotosQuery();
  const [modalActive, setModalActive] = useState(false);
  const handleClickShow = () => {
    setModalActive(true);
  };
  return (
    <div className={classes.photoGrid}>
      {data &&
        data.map((el) => (
          <PhotoItem
            active={modalActive}
            onClick={handleClickShow}
            key={el.id}
            image={el.urls.regular}
            title={el?.sponsorship?.tagline || ""}
            author={el.user.name}
          />
        ))}
    </div>
  );
});

export default PhotoGrid;
