import React from "react";
import { Link, useLocation } from "react-router-dom";


export default ({ cast , movie_id}) => {
  // Render link to full cast depending on whether the path ends in cast or full-cast
  const location = useLocation();
  const path = location.pathname.substr(location.pathname.lastIndexOf('/')+ 1)
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Actor Name</th>
          <th scope="col">Character Name</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {cast.map(actor => {
          return (
            <tr key={actor.id}>
              <td id="actorImage">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/h100/${actor.profile_path}`
                      : "./actor-picture-placeholder.png"
                  }
                  alt={actor.name}
                />
              </td>
              <td>{actor.name}</td>
              <td>{actor.character}</td>
              <td>
                {" "}
                <Link
                  to={{
                    pathname: `/person/${actor.id}`,
                  }}
                >
                  Actor Profile
                  </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
       {path==="cast" ? 
       <tfoot>
       <tr>
         <td colspan="1">More</td>
         <td colspan="3">
           <Link
             className="btn btn-primary btn-block active"
             to={{
               pathname: `/movies/${movie_id}/full-cast`,
             }}
             
           >
             Full Cast
                 </Link>
         </td>
       </tr>
     </tfoot>
       
       
       :(<></>)
        
      }
    </table>
  );
};