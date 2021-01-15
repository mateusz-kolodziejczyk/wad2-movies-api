import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoriteButton from "../components/buttons/addToFavorites";

const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.topRated.filter((m) => {
    return !context.favorites.find((f) => {
      return m.id === f.id;
    })
  });
  return (
      <PageTemplate
        title='Top Rated Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavoriteButton movie={movie} />;
        }}
      />
  );
};

export default TopRatedMoviesPage;