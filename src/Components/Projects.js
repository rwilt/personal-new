import React, {useState, useEffect} from 'react';
import '../App.css';
import Nav from './Nav';
import Coachable from './Coachable'
import ChangeAgents from './ChangeAgents'
import {NavLink, Link} from 'react-router-dom';
import FarmersMarket from './FarmersMarket';
import Lookbook from "./Lookbook";
import NetMuseum from './NetMuseum';

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
    <h1 onMouseOver={handleURL} onClick={handleURL}>Lookbook</h1>
    <h1 onMouseOver={handleURL} onClick={handleURL}>Change Agents</h1>
    <h1 onMouseOver={handleURL} onClick={handleURL}>The Farmers Market</h1>
    <h1 onMouseOver={handleURL} onClick={handleURL}>The Net Museum</h1>
    <h1 onMouseOver={handleURL} onClick={handleURL}>Writing</h1>
    </div>

    <div className="project-show">
        {currProj === "Coachable" ? <Coachable/> : null}
        {currProj === "Lookbook" ? "Lookbook" : null }
        {currProj === "Change Agents" ? <ChangeAgents/> : null}
        {currProj === "The Farmers Market" ? <FarmersMarket/> : null}
        {currProj === "The Net Museum" ? <NetMuseum/> : null}
        {currProj === "Writing" ? "Writing" : null}
    </div>
    </div>
)
    
}

export default Projects;