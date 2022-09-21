//jshint esversion:9
import React from "react";
import ActorCard from "./Actorcard.js";
import IMG_NOT_FOUND from "../../images/not-found.png";
import {FlexGrid} from "../styles/StyledComponents.js";

const ActorGrid=(  {actor}  ) => {
  return (

    <>
    <FlexGrid>
     {actor.map((val) =>
        <ActorCard  id={val.person.id} key={val.person.id}  name={val.person.name}
          image={val.person.image ? val.person.image.medium : IMG_NOT_FOUND}
          gender={val.person.gender}
          country={val.person.country ? val.person.country.name : ""}
          birthday={val.person.birthday}
          />
     )}
     </FlexGrid>
    {/*}<ul>
     {actor.map((val) =>
       <li key={val.person.id}>
       <img src={val.person.image ? val.person.image.medium : ""}></img>
       </li>
     )}
    </ul>*/}
    </>



);
}

export default ActorGrid;
