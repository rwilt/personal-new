import React, {useState, useEffect} from 'react';
import '../App.css';

import {NavLink, Link} from 'react-router-dom';

let Nav = (props) => {

    return (
        <div className="nav-container">
            <header>
                <NavLink className="nav-link" to="/projects" exact>Projects</NavLink>
                <a className="nav-link" target="_blank" href="https://drive.google.com/file/d/1IpxyoxvHZyOWafAPrO8sQAK6GcEXIYdn/view">Resumé</a>
                {/* <a className="nav-link" target="_blank" href="https://github.com/rwilt">GitHub</a> */}
                <NavLink className="nav-link" to="/contact" exact>Contact</NavLink>
                <NavLink className="nav-link" to="/about" exact>★</NavLink>
            </header>
          
        </div>
    )

}

export default Nav;