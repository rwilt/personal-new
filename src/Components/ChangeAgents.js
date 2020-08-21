import React, {useState, useEffect} from 'react';
import '../App.css';
import CAScreen from '../changeagent.png'

const ChangeAgents = (props) => {

return (
<div className="coachable-contain">

<img className="CAScreen" src={CAScreen} alt="screenshot of my app"></img>
<p id="media" >Video coming soon!</p>
<h1 id="media" > ChangeAgents is an app to help you find civic engagement opportunities.</h1>
<h1 id="media">Built with JavaScript, Rails and PostgreSQL.</h1>
<a id="media" href="https://github.com/katmaldon/ChangeAgents-API">View this project on GitHub</a>
</div>
)

    
}

export default ChangeAgents;