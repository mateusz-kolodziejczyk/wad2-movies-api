import React from "react";
import "./personImages.css";

export default ({ images }) => {
  return (
    <>
      <ul className="list-group list-group-horizontal" id="imageList">
        {images.map(image => {
          return (
          <img
            src={
            `https://image.tmdb.org/t/p/w200/${image.file_path}`
            }
            className="list-group-item"
            key={image.file_path}
            alt={"The actor on the page"}
          />)
        }
        )}
      </ul>
    </>
  );
};