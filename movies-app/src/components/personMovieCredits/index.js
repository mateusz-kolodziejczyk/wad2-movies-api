import React from "react";
import { Link } from "react-router-dom";


export default ({ credits}) => {
  return (
    <table className="table table-striped table-bordered table-hover">
       <thead>
        <tr>
          <th scope="col">Movie Poster</th>
          <th scope="col">Title</th>
          <th scope="col">Character Name</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {credits.filter(movie => movie.order < 2).sort((movie_a,movie_b)=>{
            if(movie_a.popularity<movie_b.popularity){
              return 1;
            }
            else if(movie_a.popularity>movie_b.popularity){
              return -1;
            }
            else{
              return 0
            }
        }).map(movie => {
          return (
            <tr key={movie.id}>
              <td id="actorImage">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/h100/${movie.poster_path}`
                      : "./actor-picture-placeholder.png"
                  }
                  alt={movie.original_title}
                />
              </td>
              <td>{movie.original_title}</td>
              <td>{movie.character}</td>
              <td>
                {" "}
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                  }}
                >
                  Movie Page
                  </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};