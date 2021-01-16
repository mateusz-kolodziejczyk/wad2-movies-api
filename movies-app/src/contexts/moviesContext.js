import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getFavourites, addFavourite } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "load":
            return { movies: action.payload.result };
        case "load-favourites":
            return null;

        default:
            return state;
    }
};

const MoviesContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, { movies: [], favourites: [] });
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        getMovies().then(result => {
            console.log(result);
            dispatch({ type: "load", payload: { result } });
        });
    }, []);

    // The favourites will only be loaded if a username can be provided.
    const loadFavourites = (username) => {
        getFavourites(username).then((movies) => {
            dispatch({ type: "load-favourites", payload: { movies } });
        });
    }

    const addToFavorites = (username) => {
        addFavourite(username);
    };

    return (
        <MoviesContext.Provider
            value={{
                movies: state.movies,
                setAuthenticated
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider