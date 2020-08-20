import React, {useState, useEffect} from 'react';
import '../App.css';
import Me from '../me.png'
import {NavLink, Link} from 'react-router-dom';

const About = (props) => {

    return(
        <div className="about-container">
        <a href ="/" className="close-btn">X</a>
        <div className="about-list">
            <img className="my-pic" src={Me} alt="photo of me"></img>
            <h1>This site was built with React, custom CSS and some funny photos of my cat.</h1>
            <h1>I'd love to work on a project with you and build something great together. <a href className="highlight" href={`mailto:${"rosie.wilt@gmail.com"}?subject=Hi%20Rosie%20:)!&body=Hey Rosie!%0D%0A%0D%0A I wanted to reach out about...[your message here - ideas: job opportunities, my projects, skincare, favorite breed of dog, Buffy and Spike vs. Buffy and Angel, etc.].`}>Let's talk!</a> </h1>
            <h1></h1>
        </div>
    </div>
    )

}

export default About;

