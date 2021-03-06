import React, {useState, useEffect} from 'react';
import '../App.css';

const Coachable = (props) => {

return (
<div className="coachable-contain" id="media-div">

<div className="videoDiv">
<iframe width="560"height="315" src="https://www.youtube.com/embed/R-Js3u5uoEE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h1 id="media"> Coachable is a game designed to help you become a better interviewee.</h1>
<h1 id="media" >Built with React, Rails, Postgres, and Web Speech API.</h1>
<a id="media" target="_blank" href="https://github.com/rwilt/coachable-frontend">View this project on GitHub</a>
</div>
)

    
}

export default Coachable;