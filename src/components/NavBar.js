import React from "react";
import { NavLink }   from 'react-router-dom'; 
import 'font-awesome/css/font-awesome.min.css';
import './NavBar.css'


const NavBar2=()=> {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact={"true"} to="/" className="nav-logo">
              Awsome <br/> Movies
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact = {"true"}
                  to="/"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                  <br/>
                  <br/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact = {"true"}
                  to="/popular"
                  activeclassname="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Popular <br/>&nbsp;&nbsp; Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact = {"true"}
                  to="/contact"
                  activeclassname="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                About the <br/>&nbsp;&nbsp;developer
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default NavBar2