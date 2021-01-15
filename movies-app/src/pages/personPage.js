import { Link, Route, withRouter } from "react-router-dom"
import React from "react";
import PageTemplate from "../components/templatePersonPage";
import PersonDetails from "../components/personDetails";
import usePerson from "../hooks/usePerson";
import useImages from "../hooks/useImages";
import useMovieCredits from "../hooks/useMovieCredits";
import PersonImages from "../components/personImages";
import PersonMovieCredits from "../components/personMovieCredits";
import './expandingButton.css';

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id);
  const [images] = useImages(id);
  const [credits] = useMovieCredits(id);
  return (
    <>
    {person ?  (
        <>
          <PageTemplate person={person} images={images} credits={credits}>
            <PersonDetails person={person} />
          </PageTemplate>
          <div className="row top-buffer">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/images") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/person/${id}/images`}
                >
                  Show Other Images
                </Link>
              ) : (
                  <Link
                    className="btn btn-primary btn-block active"
                    to={`/person/${id}`}
                  >
                    Hide Other Images
                  </Link>
                )}
            </div>
          </div>
          <Route
            path={`/person/:id/images`}
            render={props => <PersonImages images={images} {...props} />}
          />
          <div className="row top-buffer">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/movie-credits") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/person/${id}/movie-credits`}
                >
                  Show Movies the Person Starred in
                </Link>
              ) : (
                  <Link
                    className="btn btn-primary btn-block active"
                    to={`/person/${id}`}
                  >
                    Hide Movie Credits
                  </Link>
                )}
            </div>
          </div>
          <Route
            path={`/person/:id/movie-credits`}
            render={props => <PersonMovieCredits credits={credits} {...props} />}
          />
       </>
    )
    : 
    (
        <p>Waiting for person details </p>
    )
    }
    </>
  );
};

export default withRouter(PersonPage);