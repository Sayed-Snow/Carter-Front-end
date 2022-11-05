import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Cardbs from 'react-bootstrap/Card';
import './Ribbon.css'
import ratingColour from "../util/Ratingcolour";


const Card =({title, poster_path,vote_average,id})=>{
    const img = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + poster_path
    const color= ratingColour(vote_average*10);
    const linkId = '/' + id
 return(
  
    <Cardbs  style={{ width: '18rem', margin: "6% 0 50px " }}>
    <a href={linkId} className="stretched-link" ></a>
    <div className="ribbon"  ><span style={{background: color}} >{Math.floor(vote_average *10)} </span></div>
   
    <Cardbs.Img variant="top" src={img} alt={poster_path} />
    <Cardbs.Body>
      <Cardbs.Title>{title}</Cardbs.Title>


    </Cardbs.Body>
  </Cardbs>

 )   
}

export default Card
