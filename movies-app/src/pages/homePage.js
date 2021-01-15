import React, { useContext, useEffect, useState } from "react";
import { Link, Route, useLocation } from "react-router-dom";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavoritesButton from '../components/buttons/addToFavorites';
import DiscoverSearchForm from '../components/discoverSearchForm';
import { MoviesContext } from '../contexts/moviesContext';
import './expandingButton.css'

const MovieListPage = (props) => {
  // Find out 
  const params = new URLSearchParams(props.location.search);
  const location = useLocation();
  const path = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);
  console.log(params.toString());
  const context = useContext(MoviesContext);

  const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (params.toString() !== "") {
      context.loadMoviesQueryString(params.toString());
    }
    else {
      context.loadMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Change the state of movies every time its changed
  useEffect(() => {
    setMovies(context.movies.filter((m) => {
      return !context.favorites.find((f) => {
        return m.id === f.id;
      })
    }));
  }, [context.movies, context.favorites])


  return (
    <>
      {movies ?
        <>
          <div className="row top-buffer bottom-buffer">
            <div className="col-12 ">
              {path !== "search-form" ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={params.toString() === "" ? '/search-form' : `/search-form?${params.toString()}`}
                >
                  Open Discover Movies Form
                </Link>
              ) : (
                  <Link
                    className="btn btn-primary btn-block active"
                    to={params.toString() === "" ? '/' : `/?${params.toString()}`}
                  >
                    Hide Discover Movies Form
                  </Link>
                )}
            </div>
          </div>
          <Route
            path={`/search-form`}
            render={props => <DiscoverSearchForm {...props} />}
          />
          <PageTemplate
            title="No. Movies"
            movies={movies}  /* Changed */
            action={(movie) => {
              return <AddToFavoritesButton movie={movie} />;
            }}
          /></> : (<></>)}

    </>
  );
};
export default MovieListPage;