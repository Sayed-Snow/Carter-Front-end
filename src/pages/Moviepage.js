import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/NavBar.css"

function Moviepage(id){

    const movieDetails = 'https://api.themoviedb.org/3/movie/'+ "663712" +'?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US'
    const [movie, setMovie] = useState([]);
    const genre = []
    
    const loadMovie = () => {
        axios.get(movieDetails)
        .then(({data}) =>{
            setMovie(data)
            
        })
    }
    useEffect(() =>{
        loadMovie()
    },[])

    const {poster_path, tagline, title ,vote_average ,overview ,genres } = movie
    const img = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + poster_path

    const getGenres =(()=>{
        genres.forEach(element => {
            genre.push(element.name)
            console.log(genre)
        });
        document.getElementById('genre').innerHTML = genre
    })

    return(
        
        <div>
            <div className="grid-container">
                <div className="left">
                    <img className='iii' src={img}/>
                </div>
                <div className="middle">
                    <h1>{title}</h1>
                    
                    <p>{tagline}</p>
                    <div>{vote_average}</div>
                    <h1>Overview</h1>
                    <p>{overview}</p>
                    <h1>Genres</h1>
                    <p id='genre'>{}</p>
                </div>
       
            </div>
            
        </div>
    )
}

export default Moviepage