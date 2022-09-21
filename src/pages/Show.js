//jshint esversion:9




import React,{useState,useEffect,useReducer} from "react";
import {useParams} from "react-router-dom";

import Details from "../components/show/Details.js";

import Seasons from "../components/show/Seasons.js";

import Cast from "../components/show/Cast.js";

import ShowMainData from "../components/show/ShowMainData.js";

import {InfoBlock,ShowPageWrapper} from "./show.styled.js";


const Show=() => {

  const {id} =useParams();
  //console.log(id);
  /*const[showData,setShowData]=useState(null);
  const[isLoading,setIsLoading]=useState(true);
  const[error,setError]=useState(null);*/

  const reducer=(prevstate,action) => {
  //  console.log(action);
    switch(action.type) {
      case "Fetch_success" :

          return ({isLoading:false,error:null,showData:action.data});

      case "Fetch_No" :


                return ({...prevstate,isLoading:false,error:action.error});

      default:
         return prevstate;
    }
  };

  const initialState={
    showData:null,
    isLoading:true,
    error:null
  };


  const [{showData,isLoading,error},dispatch]=useReducer(reducer,initialState);




  useEffect(() => {
    let isMounted=true;
    fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`).then((res) => res.json())
      .then((data) => {
        if(isMounted) {
          setTimeout(() => {
          /*setIsLoading(false);
          setShowData(data);*/
          dispatch({type:"Fetch_success",data:data});
        },2000);
      }
    })
      .catch((err) => {
        if(isMounted) {
           dispatch({type:"Fetch_No",error:err});
        }
      });
      return () => {
        isMounted=false;
      };
  },[id]);

  //console.log(showData);
  if(isLoading) {
    return (<><div>Data is being loaded you will hae to wait for some time</div></>);
  }
  else if(error) {
    return (<><div>Wait you got an error</div></>);
  }
  else {
  return (

    <>
    <ShowPageWrapper>
    <InfoBlock>
     <h2>MainData</h2>
     <ShowMainData name={showData.name} rating={showData.rating} tags={showData.genres} image={showData.image} summary={showData.summary} />
    </InfoBlock>
    <InfoBlock>
      <h2>Details</h2>
      <Details status={showData.status} premiered={showData.premiered} network={showData.network} />
    </InfoBlock>
    <InfoBlock>
      <h2>Seasons</h2>
      <Seasons seasons={showData._embedded.seasons} />
    </InfoBlock>
    <InfoBlock>
      <h2>Cast</h2>
      <Cast cast={showData._embedded.cast} />
    </InfoBlock>
    </ShowPageWrapper>
    </>


  );
}
}

export default Show;
