import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import RemoveFromWatchlistButton from "../components/buttons/removeFromWatchlist";
import {MoviesContext} from '../contexts/moviesContext'

const WatchlistPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Watchlist"}
      action={movie => <RemoveFromWatchlistButton movie={movie} />}
    />
  );
};

export default WatchlistPage;