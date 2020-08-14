import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Rose from './rose.png'
import PropTypes from 'prop-types';
import Bagel from './bboy.png'
function App() {

let [hover, setHover] = useState(false)
let [bagelHover, setBagelHover] = useState(false)
let [mousePos, setMousePos ] = useState({x:322, y:133})
let [offsetPos, setOffsetPos] = useState({x:PropTypes.number, y:PropTypes.number})

const handleMouseOver = e => {
  setMousePos({x: e.clientX - 10, y: e.clientY - 10})
  setHover(true)
 
  if (mousePos.X > 150 && mousePos.X > 450 &&  mousePos.y > 130){
    setHover(false)
  }
}

const handleBMouseOver = e => {
  setMousePos({x: e.clientX - 10, y: e.clientY - 10})
  setBagelHover(true)
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
  let x = e.clientX - 10;
  let y = e.clientY - 8 ; //note, there might be a better event attribute to use
  setMousePos({x, y});
  console.log(mousePos)
}

let styles = {
  position:"absolute", top: mousePos.y + "px", left: mousePos.x + "px", height: 130
}

  return (
    <div className="intro" >
      <h1>Hey! I'm <span className="highlight" onMouseEnter={handleMouseOver}  onMouseLeave={handleMouseOut}> Rosie{hover && <img src={Rose} onMouseMove={(e)=>{moveMouseImg(e)}} style={styles}/>} </span>.</h1>

     
       <h1>Previously I was in the luxury fashion space working in wholesale and merchandising for brands like <span className="highlight"><a href="http://www.shopredone.com">RE/DONE</a></span>.</h1>

       <h1>I'm passionate about creativity, helping others, and learning new things, and actively seeking a new role.</h1>
       <h1>Outside of that, I enjoy Overwatch, Lemonheads, and Keanu Reeves. I live in Brooklyn with my cat, <span className="highlight" onMouseEnter={handleBMouseOver}  onMouseLeave={handleMouseOut}>Bagel{bagelHover && <img src={Bagel} onMouseMove={(e)=>{moveMouseImg(e)}} style={styles}/>} </span>.</h1>
        <h1>If you want to know more about my work - check out my <span className="highlight">projects</span>, and <span className="highlight">CV</span>.
        Curious to chat more? <span className="highlight">Contact me</span>! </h1>

    </div>
  );
}

export default App;
