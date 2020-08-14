import React, {useState, useEffect} from 'react';
import './App.css';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import {NavLink, Link} from 'react-router-dom';

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