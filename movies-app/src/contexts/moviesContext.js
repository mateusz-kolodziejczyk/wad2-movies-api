import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getFavourites, addFavourite } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "load":
            return { movies: action.payload.result, favourites: [...state.favourites] };
        case "load-favourites":
            return {movies: [...state.movies], favourites: action.payload.favourites};
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
        getFavourites(username).then((favourites) => {
            dispatch({ type: "load-favourites", payload: { favourites } });
        });
    }
    const addToFavourites = (username, id) => {
        
        // Add a movie to favourites, then load favourites after its been updated.
        addFavourite(username, id).then(() =>{
            loadFavourites(username);
        })
    };

    return (
        <MoviesContext.Provider
            value={{
                movies: state.movies,
                favourites: state.favourites,
                setAuthenticated,
                addToFavourites,
                loadFavourites,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider