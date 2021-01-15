import { useEffect, useState } from "react";
import { getPersonImages } from '../api/tmdb-api'

const useImages = id => {
    const [images, setImages] = useState([]);
    useEffect(() => {
      getPersonImages(id).then(images => {
        setImages(images);
      });
    }, [id]);
  return [images, setImages];
};

export default useImages