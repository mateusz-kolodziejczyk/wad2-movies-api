import { Link, Route, withRouter } from "react-router-dom"
import MovieReviews from "../components/movieReviews"
import MovieCast from "../components/movieCast"
import React from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";
import useCast from "../hooks/useCast";
import "./expandingButton.css";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  const [cast] = useCast(id);
  return (
    <>
      {movie && cast ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
          <div className="row top-buffer">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/reviews") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}/reviews`}
                >
                  Show Reviews (Extracts)
                </Link>
              ) : (
                  <Link
                    className="btn btn-primary btn-block active"
                    to={`/movies/${id}`}
                  >
                    Hide Reviews
                  </Link>
                )}
            </div>
          </div>
          <Route
            path={`/movies/:id/reviews`}
            render={props => <MovieReviews movie={movie} {...props} />}
          />
          <div className="row top-buffer">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/cast") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}/cast`}
                >
                  Show Cast
                </Link>
              ) : (
                  <Link
                    className="btn btn-primary btn-block active"
                    to={`/movies/${id}`}
                  >
                    Hide Cast
                  </Link>
                )}
            </div>
          </div>

          <Route
            path={`/movies/:id/cast`}
            render={props => <MovieCast cast={cast.splice(0, 10)} movie_id={movie.id} {...props} />}
          />
        </>
      ) : (
          <p>Waiting for movie details</p>
        )}
    </>
  );
};

export default withRouter(MoviePage);