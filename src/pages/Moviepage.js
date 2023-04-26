import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import "../components/NavBar.css"
import onNextFrame from "../util/Formvalildation";
import getGenres from "../util/Genres";
import ratingColour from "../util/Ratingcolour";

 function Moviepage(value){
    const [movie, setMovie] = useState([]);
    const [tagline, setTagline] = useState([]);
    const [title, setTitle] = useState([]);
    const [genres, setGenres] = useState([]);
    const [releaseDate, setReleaseDate] = useState([]);
    const id = value.id;
    
    useEffect(() =>{
        const movieDetails = `https://api.themoviedb.org/3/movie/${id.slice(1)}?api_key={???}&language=en-US`
        async function getData(){
            const res = await axios.get(movieDetails);
            setMovie(res.data) 
            setTitle(res.data.title) 
            setGenres(res.data.genres) 
            setTagline(res.data.tagline) 
            setReleaseDate(res.data.release_date.substring(0,4)) 
            
         }
        getData()
    },[])

    onNextFrame()
    const {poster_path ,vote_average ,overview  } = movie
    const img = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + poster_path
    return !genres.length ?
        <h1 style={{textAlign: 'center'}}>Loading</h1> :(
        
        <div>
        
            <div className="grid-container" style={{marginTop: '70px'}}>
                <div className="left">
                    <img className='poster' src={img} alt={poster_path}/>
                </div>
                <div className="middle" style={{marginLeft: '15px', marginRight: '15px'}}>
                    <h1>{title} ({releaseDate})</h1>
                    
                    <p>{tagline}</p>
                    <div id="rating" style={{ background : ratingColour(vote_average*10),width: '160px'} }>RATING: {Math.floor(vote_average*10)}</div>
                    <h1>Overview</h1>
                    <p style={{textAlign:'justify'}}>{overview}</p>
                    <h1>Genres</h1>
                    <p id='genre'>{getGenres(genres)}</p>
                </div>
       
            </div>
            <div className="form-container" >        
                <Form>{}</Form>
            </div>
                
        </div>
    )
}
export default Moviepage;
