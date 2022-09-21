//jshint esversion:9
import React from "react";

import ShowCard from "./Showcard.js";

import IMG_NOT_FOUND from "../../images/not-found.png";

import {FlexGrid} from "../styles/StyledComponents.js";

import {useShows} from "../../misc/customHooks.js";


const ShowGrid=(  {show}  ) => {

  const [starredShows,dispatchStarred]=useShows();

  return (

    <>
    <FlexGrid>
     {show.map((val) => {

        const isStarred=starredShows.includes(val.show.id);

        const onStarclick=() => {
          if(isStarred) {
            dispatchStarred({type:'REMOVE',showId:val.show.id});
          }
          else {
            dispatchStarred({type:'ADD',showId:val.show.id});
          }
        }


        return <ShowCard  id={val.show.id} key={val.show.id}  name={val.show.name}
          image={val.show.image ? val.show.image.medium : IMG_NOT_FOUND}
          summary={val.show.summary} onStarclick={onStarclick}
          isStarred={isStarred}
          />
        }
     )}
    </FlexGrid>

    </>



);
}

export default ShowGrid;
