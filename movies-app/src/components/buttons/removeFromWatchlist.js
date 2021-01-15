import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const RemoveFromWatchlistButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const handleRemoveFromWatchlist = e => {
    e.preventDefault();
    context.removeFromWatchlist(movie.id) 
   };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleRemoveFromWatchlist}
    >
      Remove from Watchlist
    </button>
  );
};

export default RemoveFromWatchlistButton;