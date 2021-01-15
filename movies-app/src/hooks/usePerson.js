import { useEffect, useState } from "react";
import { getPerson } from '../api/tmdb-api'

const usePerson = id => {
  const [actor, setPerson] = useState(null);
  useEffect(() => {
    getPerson(id).then(actor => {
      setPerson(actor);
    });
  }, [id]);
  return [actor, setPerson];
};

export default usePerson