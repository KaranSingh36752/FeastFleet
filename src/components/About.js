import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";


class About extends React.Component {


    
    render(){
        return (
              <>
        <div className="about">
            <h1>This is the About</h1>
            <Profile/>
            <h1>The most coveted dining experiences of our time.</h1>
            <p>We currently serve New York City, London, Miami, Los Angeles, and San Francisco &amp; Wine Country. More cities to come in 2024.</p>
        </div>
        </>
        );
    };
};

export default About;