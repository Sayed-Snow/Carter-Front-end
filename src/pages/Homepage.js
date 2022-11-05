import React from "react";
import './Button.css'


class HomePage extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', marginTop: '150px'}}>
                <h1>Welcome to Awesome Movies</h1><br/>
                <a className="button" href="/popular" >Browse movies</a>
            </div>
        );
    }
}

export default HomePage