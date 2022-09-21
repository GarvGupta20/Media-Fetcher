//jshint esversion:6
import React from "react";
import IMG_NOT_FOUND from "../../images/not-found.png";
import {CastList} from "./cast.styled.js";


const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div  className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : IMG_NOT_FOUND}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              {person.name} | {character.name} {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};




export default Cast;
