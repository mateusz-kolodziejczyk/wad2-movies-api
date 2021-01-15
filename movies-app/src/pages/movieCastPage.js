import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieCast from '../components/movieCast'
import useCast from '../hooks/useCast'
import useMovie from '../hooks/useMovie'

const MovieCastPage = (props) => {
  const movie_id = props.match.params.id;
  const [movie] = useMovie(movie_id);
  const [cast] = useCast(movie_id);
  return (
    <>
      {movie && cast ?
        (
          <PageTemplate movie={movie}>
            <MovieCast cast={cast}></MovieCast>
          </PageTemplate>
        )
        : (<p>Waiting for cast details</p>)
      }
    </>
  );
};

export default MovieCastPage;