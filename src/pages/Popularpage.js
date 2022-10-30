import React, {  useEffect, useState } from "react";
import CardList from '../components/CardList'

function Popularpage ()  {

  const [popular,setPopular] = useState([]);

  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1')
      .then(response=> response.json())
      .then(movies => {setPopular(movies.results)});
  },[]) 


    return (
      <div>
        <CardList movies={popular}/>
      </div>
    );
    
};

export default Popularpage