import React from "react";
import './NavBar.css'


const Form = () =>{
    return(
        <form className="needs-validation" style={{width: '100%', }} noValidate>
        <div className="form-floating" style={{padding: '10px'}}>
            <input type="text" className="form-control" id="First_name" placeholder="First name" required/>
            <label htmlFor="floatingInput">First name</label>
            <div className="invalid-feedback"/>
        </div>
        <div className="form-floating" style={{padding: '10px'}}>
            <input type="text" className="form-control" id="Surname" placeholder="Surname" required/>
            <label htmlFor="floatingInput">Surname</label>
            <div className="invalid-feedback"/>
        </div>
        <div className="form-floating" style={{padding: '10px'}}>
            <input type="text" className="form-control" id="Email_Address" placeholder="Email Address" required/>
            <label htmlFor="floatingInput">Email Address</label>
            <div className="invalid-feedback"/>
        </div>
        <div className="form-floating" style={{padding: '10px'}}>
            <input type="text" className="form-control" id="Phone_Number" placeholder="Phone Number" required/>
            <label htmlFor="floatingInput">Phone Number</label>
            <div className="invalid-feedback"/>
        </div>
        <div style={{padding: '10px',display:'flex'}}>
        <button type="submit" className="btn btn-primary" style={{float:'left', width:'100%' , background: '#04AA6D', border:'0px'}}>Submit</button>
        </div>
    </form>
    )
    
}


export default Form