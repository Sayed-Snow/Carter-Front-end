import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Card1 from 'react-bootstrap/Card';


const Card =({title, poster_path,vote_average})=>{
    const img = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + poster_path
 return(
    <Card1 style={{ width: '18rem', margin: "0 0 50px " }}>
    <Card1.Img variant="top" src={img} />
    <Card1.Body>
      <Card1.Title>{title}</Card1.Title>

    </Card1.Body>
  </Card1>

 )   
}

export default Card
