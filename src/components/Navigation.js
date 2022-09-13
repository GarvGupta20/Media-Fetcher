//jshint esversion:9





import React from "react";
import {Link} from "react-router-dom";

const a=[

  {to:"/about",content:"Click to go on the About page"},
  {to:"/home",content:"Click to go on the  Home page"}
];

const Navigation=() => {
  return (

    <>
    <div>
    <ul>
        {
           a.map((item,index) => {
            return <li key={index}>
             <Link to={item.to}>{item.content}</Link>
             </li>
         })
        }
    </ul>
    </div>
    </>

  );
}


export default Navigation;
