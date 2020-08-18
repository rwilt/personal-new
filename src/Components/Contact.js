import React, {useState, useEffect} from 'react';
import '../App.css';
import Nav from './Nav';
import {NavLink, Link} from 'react-router-dom';

const Contact = (props) => {

return(
    <div className="contact-container">
        <a href ="/" className="close-btn">X</a>
        <div className="contact-list">
        <a href="https://www.linkedin.com/in/rosie-wilt/"><h1>LinkedIn</h1></a>
        <a href="https://github.com/rwilt"><h1>GitHub</h1></a> 
        <a href={`mailto:${"rosie.wilt@gmail.com"}?subject=Hi%20Rosie%20:)!&body=Hey Rosie!%0D%0A%0D%0A I wanted to reach out about...[your message here - ideas: job opportunities, my projects, skincare, favorite breed of dog, Buffy and Spike vs. Buffy and Angel, etc.].`}><h1>E-mail</h1></a>
        </div>
    </div>
)
    
}

export default Contact;