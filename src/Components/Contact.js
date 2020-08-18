import React, {useState, useEffect} from 'react';
import '../App.css';
import Nav from './Nav';
import {NavLink, Link} from 'react-router-dom';

const Contact = (props) => {

return(
    <div className="contact-container">
        <a href ="/" className="close-btn">X</a>
        <div className="contact-list">
        <a href=""><h1>LinkedIn</h1></a>
        <a href=""><h1>GitHub</h1></a> 
        <a href=""><h1>E-mail</h1></a>
        </div>
    </div>
)
    
}

export default Contact;