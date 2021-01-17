import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {AuthContext} from "../../contexts/authContext";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavourites(authContext.userName, movie.id);
    context.loadFavourites();
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;