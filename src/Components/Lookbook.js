import React, {useState, useEffect} from 'react';
import '../App.css';

const Lookbook = (props) => {

return (
<div className="coachable-contain">
<div className="videoDiv">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ful2802JrVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h1 id="media">Lookbook is your closet made virtual. Try different outfits and save your favorites for later.</h1>
<h1 id="media">Built with React, Rails, Draggable and PostgreSQL.</h1>
<a  id="media"href="https://github.com/dnamgyal/mod4frontend">View this project on GitHub</a>
</div>
</div>
)

    
}

export default Lookbook;