//jshint esversion:9
import React from "react";
import {SearchCard} from "../styles/StyledComponents.js";

const ActorCard = ({ image, name, gender, country, birthday }) => {
  return (
    <SearchCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
    </SearchCard>
  );
};


export default ActorCard;
