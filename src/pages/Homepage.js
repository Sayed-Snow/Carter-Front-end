import React from "react";
import './Button.css'


class HomePage extends React.Component {
    render() {
        return (
            <div style={{textalign: 'center'}}>
                <h1>Welcome to Awesome Movies</h1>
                <button className="button">Browse movies</button>

            </div>
        );
    }
}

export default HomePage