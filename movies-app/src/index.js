import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieReviewPage from "./pages/movieReviewPage";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoriteMoviesPage';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PersonPage from './pages/personPage';
import WatchlistPage from "./pages/watchlistPage";
import MovieCastPage from "./pages/movieCastPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      {/* New Header  */}
        <div className="container-fluid">
          <AuthContextProvider>
            <MoviesContextProvider>
              <GenresContextProvider>
                <Switch>
                  <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                  <PrivateRoute exact path="/movies/top-rated" component={TopRatedMoviesPage} />
                  <PrivateRoute exact path="/movies/watchlist" component={WatchlistPage} />
                  <Route exact path="/login" component={LoginPage} />
                  <PrivateRoute path="/movies/:id/full-cast" component={MovieCastPage} />
                  <PrivateRoute path="/movies/:id" component={MoviePage} />
                  <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                  <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                  <PrivateRoute path="/person/:id" component={PersonPage} />
                  <PrivateRoute path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </GenresContextProvider>
            </MoviesContextProvider>
          </AuthContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));