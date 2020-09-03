import React, {useState, useEffect} from 'react';
import '../App.css';
import CAScreen from '../changeagent.png'

const ChangeAgents = (props) => {

return (
<div className="coachable-contain">
<div className="videoDiv">
<iframe width="560" height="315" src="https://www.youtube.com/embed/cEathYPjB7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p id="media" >Video coming soon!</p>
<h1 id="media" > Change Agents is an app to help you find civic engagement opportunities.</h1>
<h1 id="media">Built with JavaScript, Rails and PostgreSQL.</h1>
<a id="media" target="_blank" href="https://github.com/katmaldon/ChangeAgents-API">View this project on GitHub</a>
</div>
</div>
)

    
}

export default ChangeAgents;