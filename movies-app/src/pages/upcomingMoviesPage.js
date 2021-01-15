import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToWatchlistButton from "../components/buttons/addToWatchlist"
import {MoviesContext} from '../contexts/moviesContext'
const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => { 
    return !(m.watchlist === true);
  });
  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchlistButton movie={movie} />;
        }}
      />
  );
};

export default UpcomingMoviesPage;