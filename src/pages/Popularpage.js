import React, {  useEffect, useState } from "react";
import CardList from '../components/CardList'
import axios from "axios";

function Popularpage ()  {


  const [popular,setPopular] = useState([]);
  let page = 1;

  const loadMovies = () =>{
  axios
  .get('https://api.themoviedb.org/3/movie/popular?api_key={???}&language=en-US&page='+ page)
  .then(({ data }) =>{
    const arrMovie = []
    data.results.forEach(movie => {
      arrMovie.push(movie)
    });
    setPopular((oldMovies) =>[...oldMovies, ...arrMovie]);
  })
  page++;
};

  const handleScroll = (e) =>{
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadMovies();
    }
  };

  useEffect(()=> {

  
    loadMovies();
    window.addEventListener('scroll', handleScroll);
  },[]);


  return !popular.length ?
  <h1 style={{textAlign: 'center'}}>Loading</h1> :
  (
      
      <div style={{marginTop: '100px'}}>
        <CardList movies={popular}/>
      </div>
    );
    
};

export default Popularpage
