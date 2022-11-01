import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Cardbs from 'react-bootstrap/Card';
import Moviepage from "../pages/Moviepage";


const Card =({title, poster_path,vote_average,page,id})=>{
    const img = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + poster_path
 return(
    <Cardbs  style={{ width: '18rem', margin: "0 0 50px " }}>
    <a href='#' className="stretched-link"></a>
    <Cardbs.Img variant="top" src={img} />
    <Cardbs.Body>
      <Cardbs.Title>{title}</Cardbs.Title>

    </Cardbs.Body>
  </Cardbs>

 )   
}

export default Card
