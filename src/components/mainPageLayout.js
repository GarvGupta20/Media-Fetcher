//jshint esversion:9

import React,{useState} from "react";

import Navigation from "./Navigation.js";


import Title from "./Title.js";

import ShowGrid from "./show/Showgrid.js";

import ActorGrid from "./actor/Actorgrid.js";

import {RadioInputsWrapper,SearchButtonWrapper,SearchInput} from "../pages/Home.styled.js";




const MainPageLayout=() => {
   let title="Box Office";
   let subtitle="Are You Looking For A Movie";

   let m=false;


//   fetch("https://api.tvmaze.com/singlesearch/shows?q=banshee").then((res) =>res.json()).then((data) => console.log(data));
//above is the typical API call pattern used in this application





  const[input,setInput]=useState('');
  const [result,setResult]=useState(null);
  const [radio,SetRadio]= useState("");






  const onChangeInput=(ev) => {
    setInput(ev.target.value);
  };



  const onRadioChange=(ev) => {
    if(radio===ev.target.value) {
      SetRadio("");
    }
    else {
     SetRadio(ev.target.value);
   }
  };


const onKeyChange=(ev) => {
   if(ev.keyCode===13) {
     fetch(`https://api.tvmaze.com/search/${radio}?q=${input}`).then((res) => res.json()).then((data) =>setResult(data)).catch((err) => console.log(err));

   }
};



const onSearch=() => {
  fetch(`https://api.tvmaze.com/search/${radio}?q=${input}`).then((res) => res.json()).then((data) =>setResult(data)).catch((err) => console.log(err));

};





//console.log(radio);



const checkResult=() => {



   if(result && result.length>0) {
      return (result[0].show ? <ShowGrid show={result} /> : <ActorGrid actor={result} /> );
    }

    if(result && result.length===0) {

    return (
     <div>

         NO RESULT FOUND

     </div>

    );
  }

 }






  {/*}    (

         <ul>
          {result.map((val) =>
            <li key={val.show.id}>{val.show.name}</li>
          )}
         </ul>

      ) :       ( <ul>
              {result.map((val) =>
                <li key={val.person.id}>{val.person.name}</li>
              )}
             </ul>
    )     */ }





  return (
    <>
    <div>
    <Title title={title} subtitle={subtitle} />
    <Navigation />
    <SearchInput type="text" onChange={onChangeInput}  onKeyDown={onKeyChange} value={input}></SearchInput>
    <SearchButtonWrapper>
    <button type="button" onClick={onSearch}>Search</button>
    </SearchButtonWrapper>
    </div>
    <RadioInputsWrapper>
    <div>
    <label htmlFor="show-search">Shows</label>
    <input id="show-search" checked={radio=="shows" ? true : false}   type="radio"  onChange={onRadioChange} value="shows"></input>
    <label htmlFor="actor-search">actors</label>
    <input id="actor-search" checked={radio=="people" ? true : false} type="radio" onChange={onRadioChange} value="people"></input>
    </div>
    </RadioInputsWrapper>
    <div>
       {checkResult()}
    </div>
    </>


  );


}

export default MainPageLayout;
