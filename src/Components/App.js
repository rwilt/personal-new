import React, {useState, useEffect} from 'react';
import '../App.css';
import Rose from '../rose.png'
import Bagel from '../bboy.png';
import Nav from './Nav';
import Projects from './Projects';
import Resume from './Resume'
import {Switch, Route, BrowserRouter as Router, NavLink, Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import { CSSTransitionGroup } from 'react-transition-group' 

function App() {

let [hover, setHover] = useState(false)
let [bagelHover, setBagelHover] = useState(false)
let [mousePos, setMousePos ] = useState({x:0, y:0})
let [clicked, setClick] = useState(false)

const handleMouseOver = e => {
  setHover(true)
  setMousePos({x: e.clientX - 10 , y: e.clientY - 10})
  console.log(mousePos.y)
  if (mousePos.x > 420 || mousePos.y > 200){
    setHover(false)
  }
}

const handleBMouseOver = e => {
  setBagelHover(true)
  setMousePos({x: e.clientX - 10, y: e.clientY - 10})
  if (mousePos.x > 790 && mousePos.x < 815 ||  mousePos.y > 650){
    handleMouseOut()
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

let handleClick = (e) => {
  setClick((prevState) => {return !prevState})
}

  return (
 
    <div>
    <Nav/>
    <div onMouseOver={handleMouseOver} className="intro" >
      <h1>Hey! I'm <span className="highlight" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}> Rosie{hover && <img className="rose" alt="a picture of a rose" src={Rose} onMouseMove={(e)=>{moveMouseImg(e)}} style={styles}/>}</span>, a Full Stack Developer based in Brooklyn.</h1>

       <h1>I get most excited about innovative projects that help make a difference. I'm experienced in Node, React, and Rails to name a few. </h1>
     
       <h1>Previously, I worked in sales and merchandising for luxury fashion companies like <a className="highlight" href="http://shopredone.com">RE/DONE</a>.</h1>
       <h1>Check out my  <NavLink to="/projects" className="highlight">projects</NavLink> and <a target="_blank" href="https://drive.google.com/file/d/1A-tdQlkJniIwGvODL3ceINK0nscaOSN5/view?usp=sharing"  className="highlight">resume</a> for more.</h1>
       <h1>Outside of coding, I enjoy cooking, <a className="highlight" target="_blank"  href="https://www.youtube.com/watch?v=n4zVYRBHPyM">90's alt rock</a>, and Keanu Reeves. I live with my crazy cat, <span className="highlight" onMouseEnter={handleBMouseOver}  onMouseLeave={handleMouseOut}>Bagel{bagelHover && <img src={Bagel} alt="a photo of a cat" className="bagel" onMouseMove={(e)=>{moveMouseBImg(e)}} style={styles}/>} </span>.</h1>
       <h1>Sound good? <a className="highlight" href={`mailto:${"rosie.wilt@gmail.com"}?subject=Hi%20Rosie%20:)!&body=Hey Rosie!%0D%0A%0D%0A I wanted to reach out about...[your message here - ideas: job opportunities, my projects, skincare, favorite breed of dog, Buffy and Spike vs. Buffy and Angel, etc.].`}>Let's talk!</a>. </h1>

    </div>
    </div>
  
  
  );
}

export default App;
