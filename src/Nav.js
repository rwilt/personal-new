import React, {useState, useEffect} from 'react';
import './App.css';
import {NavLink, Link} from 'react-router-dom';
import Projects from './Projects';
import About from './About';


let Nav = (props) => {

    return (
        <div className="nav-container">
            <header>
                <NavLink className="nav-link" to="/projects" exact>Projects</NavLink>
                <NavLink className="nav-link" to="/contact" exact>Contact</NavLink>
                <NavLink className="nav-link" to="/about" exact>★</NavLink>
            </header>
        </div>
    )

}

export default Nav;