//jshint esversion:9
import React from "react";
import {TitleWrapper} from "./title.styled.js";


const Title=({title,subtitle}) => {
  return (

   <TitleWrapper>
   <h2 className="heading">{title}</h2>
   <p className="pa">{subtitle}</p>
   </TitleWrapper>

  );

}

export default Title;
