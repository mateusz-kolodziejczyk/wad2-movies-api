import React from "react";
import "./personPage.css";
import PersonHeader from "../personHeader";

const TemplatePersonPage = ({ person, images,credits, children }) => {
  
  return (
    <>
      <PersonHeader person={person} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w300/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="person"
            alt={person.name}
          />
        </div>
        <div className="col-9">
          {children}
        </div>
      </div>
    </>
  );
};

export default TemplatePersonPage;