import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import {NavLink, Link} from 'react-router-dom';

const Projects = (props) => {

return(
    <div className="project-container"><button>X</button>

    <div className="project-list">
    <a href="/"><h1>Coachable</h1></a>
    <a href="/"><h1>Change Agents</h1></a>
    <a href="/"><h1>The Farmers Market</h1></a>
    <a href="/"><h1>The Net Museum</h1></a>

    <a href="/"><h1>Writing</h1></a>
    </div>
    </div>
)
    
}

export default Projects;