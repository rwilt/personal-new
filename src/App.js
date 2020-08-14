import React, {useState, useEffect} from 'react';
import './App.css';
import Rose from './rose.png'
import Bagel from './bboy.png';
import Nav from './Nav';
import Projects from './Projects';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {NavLink, Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function App() {

let [hover, setHover] = useState(false)
let [bagelHover, setBagelHover] = useState(false)
let [mousePos, setMousePos ] = useState({x:0, y:0})

const handleMouseOver = e => {
  setMousePos({x: e.clientX - 10, y: e.clientY - 10})
  setHover(true)
  if (mousePos.X > 150 && mousePos.X > 450 &&  mousePos.y > 130){
    setHover(false)
  }
}

const handleBMouseOver = e => {
  setBagelHover(true)
  setMousePos({x: e.clientX - 10, y: e.clientY - 10})

  if (mousePos.X > 150 && mousePos.X > 450 &&  mousePos.y > 130){
    setBagelHover(false)
  }
}


const handleMouseOut = e => {
   
    setHover(false) 
    setBagelHover(false)
}




// let handleMouseOver = (e) =>{
// setHover((prevState)=>{return !prevState})
// if (hover){
//   console.log("yes")
//   return <React.Fragment><img src={Rose} style={{height: 200}}/></React.Fragment>
// }
// }

let moveMouseImg = (e)=> {
  // const {
  //   top: offsetTop,
  //   left: offsetLeft
  // } = e.target.getBoundingClientRect()

  // const x = ((e.pageX - offsetLeft) / e.target.width) * 100
  // const y = ((e.pageY - offsetTop) / e.target.height) * 100
  // let x = e.clientX - 10;
  // let y = e.clientY - 8 ; //note, there might be a better event attribute to use
  let x = e.clientX + document.body.scrollLeft - 5
  let y = e.clientY + document.body.scrollTop - 30
  setMousePos({x, y});  
}


let moveMouseBImg = (e)=> {
  // const {
  //   top: offsetTop,
  //   left: offsetLeft
  // } = e.target.getBoundingClientRect()

  // const x = ((e.pageX - offsetLeft) / e.target.width) * 100
  // const y = ((e.pageY - offsetTop) / e.target.height) * 100
  let x = e.clientX + document.body.scrollLeft - 5
  let y = e.clientY + document.body.scrollTop - 30//note, there might be a better event attribute to use
  setMousePos({x, y});
  // document.body.scrollLeft;
  // document.body.scrollTop
}


let styles = {
  position:"absolute", top: mousePos.y + "px", left: mousePos.x + "px", height: 130
}

  return (
 
    <div>
    <Nav/>
    <div className="intro" >
      <h1>Hey! I'm <span className="highlight" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}> Rosie{hover && <img src={Rose} onMouseMove={(e)=>{moveMouseImg(e)}} style={styles}/>}</span>, a Software Engineer based in Brooklyn.</h1>

       <h1>At age 12, I created my first website. </h1>
     
       <h1>Previously I worked in sales and merchandising for luxury fashion companies like <a className="highlight" href="http://shopredone.com">RE/DONE</a>.</h1>
       <h1>Check out my <NavLink to="/projects" className="highlight" exact>projects</NavLink> and <NavLink to="resume" className="highlight">CV</NavLink> for more.</h1>
       <h1>Outside of that, I enjoy Overwatch, <a className="highlight" href="https://www.youtube.com/watch?v=tTCS3cAaM3I">90's twee bands</a>, and Keanu Reeves. I live in Brooklyn with my cat, <span className="highlight" onMouseEnter={handleBMouseOver}  onMouseLeave={handleMouseOut}>Bagel{bagelHover && <img src={Bagel} className="bagel" onMouseMove={(e)=>{moveMouseBImg(e)}} style={styles}/>} </span>.</h1>
 
       <h1>Still curious? <a href className="highlight" href={`mailto:${"rosie.wilt@gmail.com"}?subject=Hi%20Rosie%20:)!&body=Hey Rosie!%0D%0A%0D%0A I wanted to reach out about...[your message here - ideas: job opportunities, my projects, skincare, favorite breed of dog, Buffy and Spike vs. Buffy and Angel, etc.].`}>e-mail me</a>! </h1>
   <Router>
<Switch>
  <Route path="/projects" exact>
    <Projects/>
  </Route>
  <Route path="/about">
    <About/>
  </Route>
  <Route path="/contact">
    <Contact/>
  </Route>
</Switch>
  </Router>
    </div>
    </div>
  
  );
}

export default App;
