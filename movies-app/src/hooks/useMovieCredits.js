import { useEffect, useState } from "react";
import { getPersonMovieCredits } from '../api/tmdb-api'

const useCredits = id => {
    const [credit, setCredits] = useState([]);
    useEffect(() => {
      getPersonMovieCredits(id).then(credit => {
        setCredits(credit);
      });
    }, [id]);
  return [credit, setCredits];
};

export default useCredits