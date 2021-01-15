import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRatedMovies, getMoviesQueryString } from "../api/tmdb-api";

export const MoviesContext = createContext(null);
const reducer = (state, action) => {
    switch (action.type) {
        case "add-favorite":
            return {
                movies: [...state.movies],
                upcoming: [...state.upcoming],
                topRated: [...state.topRated],
                favorites: [...state.favorites, action.payload.movie],
                initialMovies: [...state.initialMovies]
            };
        case "add-watchlist":
            return {
                upcoming: state.upcoming.map((m) =>
                    m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
                ),
                movies: [...state.movies],
                topRated: [...state.topRated],
                favorites: [...state.favorites],
                initialMovies: [...state.initialMovies]
            };
        case "remove-watchlist":
            return {
                upcoming: state.upcoming.map((m) =>
                    m.id === action.payload.movie.id ? { ...m, watchlist: false } : m
                ),
                movies: [...state.movies],
                topRated: [...state.topRated],
                favorites: [...state.favorites],

                initialMovies: [...state.initialMovies]
            };

        case "load":
            return {
                movies: action.payload.movies, 
                upcoming: [...state.upcoming], 
                topRated: [...state.topRated], 
                favorites: [...state.favorites], 
                initialMovies: [...state.initialMovies]
            };
        case "load-start":
            return { 
                movies: action.payload.movies, 
                upcoming: [...state.upcoming], 
                topRated: [...state.topRated], 
                favorites: [...state.favorites], 
                initialMovies: action.payload.movies
            };
        case "load-initial":
            return { 
                movies: state.initialMovies, 
                upcoming: [...state.upcoming], 
                topRated: [...state.topRated], 
                favorites: [...state.favorites], 
                initialMovies: [...state.initialMovies] };
        case "load-upcoming":
            return { 
                upcoming: action.payload.movies, 
                movies: [...state.movies], 
                topRated: [...state.topRated], 
                favorites: [...state.favorites], 
                initialMovies: [...state.initialMovies] };
        case "load-topRated":
            return { 
                topRated: action.payload.movies, 
                movies: [...state.movies], 
                upcoming: [...state.upcoming], 
                favorites: [...state.favorites], 
                initialMovies: [...state.initialMovies] };
        case "add-review":
            return {
                movies: [...state.movies],
                upcoming: [...state.upcoming],
                topRated: [...state.topRated],
                favorites: state.favorites.map((m) =>
                    m.id === action.payload.movie.id
                        ? { ...m, review: action.payload.review }
                        : m
                ),
                initialMovies: [...state.initialMovies]
            };
        default:
            return state;
    }
};

const MoviesContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: [], favorites: [], initialMovies: [] });
    const addToFavorites = (movieId) => {
        if (state.movies.find((m) => m.id === movieId)) {
            const index = state.movies.map((m) => m.id).indexOf(movieId);
            dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
        }
        else if (state.topRated.find((m) => m.id === movieId)) {
            const index = state.topRated.map((m) => m.id).indexOf(movieId);
            dispatch({ type: "add-favorite", payload: { movie: state.topRated[index] } });
        }
    };

    const addToWatchlist = (movieId) => {
        const index = state.upcoming.map((m) => m.id).indexOf(movieId);
        dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
    };

    const removeFromWatchlist = (movieId) => {
        const index = state.upcoming.map((m) => m.id).indexOf(movieId);
        dispatch({ type: "remove-watchlist", payload: { movie: state.upcoming[index] } })
    }

    const addReview = (movie, review) => {
        dispatch({ type: "add-review", payload: { movie, review } });
    };

    // Use it to reload movies after changing them
    const loadMovies = () => {
        getMovies().then((movies) => {
            dispatch({ type: "load-initial", payload: { movies } });
        });
    }

    // Load movies using a query string
    const loadMoviesQueryString = (queryString) => {
        getMoviesQueryString("&" + queryString).then((movies) => {
            dispatch({ type: "load", payload: { movies } })
        })
    }

    // Add to movies
    useEffect(() => {
        getMovies().then((movies) => {
            dispatch({ type: "load-start", payload: { movies } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // Add to upcoming
    useEffect(() => {
        getUpcomingMovies().then((movies) => {
            dispatch({ type: "load-upcoming", payload: { movies } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Add to topRated
    useEffect(() => {
        getTopRatedMovies().then((movies) => {
            dispatch({ type: "load-topRated", payload: { movies } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MoviesContext.Provider
            value={{
                movies: state.movies,
                upcoming: state.upcoming,
                topRated: state.topRated,
                favorites: state.favorites,
                loadMovies: loadMovies,
                loadMoviesQueryString: loadMoviesQueryString,
                addToFavorites: addToFavorites,
                addToWatchlist: addToWatchlist,
                addReview: addReview,
                removeFromWatchlist: removeFromWatchlist
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;