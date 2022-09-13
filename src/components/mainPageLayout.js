//jshint esversion:9

import React,{useState} from "react";

import Navigation from "./Navigation.js";


import Title from "./Title.js";





const MainPageLayout=() => {
   let title="box office";
   let subtitle="are you looking for a movie";

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





console.log(radio);



const checkResult=() => {



   if(result && result.length>0) {
      return result[0].show ? (

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
    )

   }

   if(result && result.length===0)

   return (
    <div>

        NO RESULT FOUND

    </div>

   );

}




  return (
    <>
    <div>
    <Title title={title} subtitle={subtitle} />
    <Navigation />
    <input type="text" onChange={onChangeInput}  onKeyDown={onKeyChange} value={input}></input>
    <button type="button" onClick={onSearch}>Search</button>
    </div>
    <label htmlFor="show-search">Shows</label>
    <input id="show-search" checked={radio=="shows" ? true : false}   type="radio"  onChange={onRadioChange} value="shows"></input>
    <label htmlFor="actor-search">actors</label>
    <input id="actor-search" checked={radio=="people" ? true : false} type="radio" onChange={onRadioChange} value="people"></input>
    <div>
       {checkResult()}
    </div>
    </>


  );


}

export default MainPageLayout;
