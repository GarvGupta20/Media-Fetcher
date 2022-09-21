//jshint esversion:9





import React from "react";
import {Link,useLocation} from "react-router-dom";
import {NavList,LinkStyled} from "./navs.styled.js";

const a=[
  {to:"/",content:"Home page"},
  {to:"/starred",content:"Starred Page"}
];

const Navigation=() => {
  const location=useLocation();
  return (

    <>
    <NavList>
        {
           a.map((item,index) => {
            return <li key={index} >
             <LinkStyled to={item.to} className={item.to === location.pathname ? "active" : ""}>{item.content}</LinkStyled>
             </li>
         })
        }
    </NavList>
    </>

  );
}


export default Navigation;
