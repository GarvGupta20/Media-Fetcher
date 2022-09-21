//jshint esversion:6
import React, { useState, useEffect } from 'react';
//import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/customHooks.js';
//import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/Showgrid.js';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => fetch(`https://api.tvmaze.com/shows/${showId}`).then((res) => res.json()));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);


   if(isLoading) {
     return (<div>
     <h2>The page is Loading</h2>
     </div>);
   }
   if(error) {
     return (<div>
     <h2>error:{error}</h2>
     </div>);
   }

   if(!isLoading && !shows) {
     return (<div>
     <h2>No shows</h2>
     </div>);
   }


   if(!isLoading && !error && shows) {
       return <ShowGrid  show={shows}/>
   }


}

export default Starred;
