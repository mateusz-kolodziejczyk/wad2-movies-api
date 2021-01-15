import { useEffect, useState } from "react";
import { getMovieCast } from '../api/tmdb-api'

const useCast = id => {
    const [cast, setCast] = useState([]);
    useEffect(() => {
      getMovieCast(id).then(cast => {
        setCast(cast);
      });
    }, [id]);
  return [cast, setCast];
};

export default useCast