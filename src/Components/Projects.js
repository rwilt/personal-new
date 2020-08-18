import React, {useState, useEffect} from 'react';
import '../App.css';
import Nav from './Nav';
import {NavLink, Link} from 'react-router-dom';

const Projects = (props) => {
    let [clicked, setClick] = useState(false)
    let [currProj, setCurrProj] = useState(null)

    let handleClick = (e)=> {
        setClick((prevState) => {return !prevState})
    }

    let handleURL = (e) => {   
        setCurrProj(e.target.innerText)
    }

return(

    <div className="project-container"><a href ="/" className="close-btn">X</a>

    <div className="project-list">
    <h1 onMouseOver={handleURL} onClick={handleURL}>Coachable</h1>
    <h1 onMouseOver={handleURL} onClick={handleURL}>Change Agents</h1>
    <h1 onMouseOver={handleURL} onClick={handleURL}>The Farmers Market</h1>
    <h1 onMouseOver={handleURL} onClick={handleURL}>The Net Museum</h1>
    <h1 onMouseOver={handleURL} onClick={handleURL}>Writing</h1>
    </div>

    <div className="project-show">
        {currProj === "Coachable" ? "Coachable" : null}
        {currProj === "Change Agents" ? "Change Agents" : null}
        {currProj === "The Farmers Market" ? "The Farmers Market" : null}
        {currProj === "The Net Museum" ? "The Net Museum" : null}
        {currProj === "Writing" ? "Writing" : null}
    </div>
    </div>
)
    
}

export default Projects;