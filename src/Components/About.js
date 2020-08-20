import React, {useState, useEffect} from 'react';
import '../App.css';
import Me from '../me.png'
import {NavLink, Link} from 'react-router-dom';

const About = (props) => {

    return(
        <div className="contact-container">
        <a href ="/" className="close-btn">X</a>
        <div className="contact-list">
            <img className="my-pic" src={Me} alt="photo of me"></img>
            <h1>I built this site using React, custom CSS and some funny photos of my cat.</h1>
            <h1>I'd love to work on a project with you and build something great together. Let's talk! </h1>
            <h1></h1>
        </div>
    </div>
    )

}

export default About;

