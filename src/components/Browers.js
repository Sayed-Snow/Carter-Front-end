import React from "react"
import Navbar from './NavBar2'
import Popularpage from "../pages/Popularpage";
import HomePage from "../pages/Homepage";
import Contactpage from "../pages/Contactpage";
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
}   from 'react-router-dom'; 
import Moviepage from "../pages/Moviepage";

const Browers = () =>{
    return(
        <>
        <Router>
        <Navbar/>

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/popular" element={<Popularpage/>} />
            <Route path="/contact" element={<Moviepage/>} />
          </Routes>
        </div>
      </Router>
        </>
    ) 
}
export default Browers