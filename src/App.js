import React, {useState, useEffect} from 'react';
import './App.css';
import Rose from './rose.png'
import PropTypes from 'prop-types';
import Bagel from './bboy.png';
import Nav from './Nav';

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
      <h1>Nice to meet you! I'm <span className="highlight" onMouseEnter={handleMouseOver}  onMouseLeave={handleMouseOut}> Rosie{hover && <img src={Rose} onMouseMove={(e)=>{moveMouseImg(e)}} style={styles}/>}</span>.</h1>

       <h1>I'm a software engineer and I enjoy learning how things work.</h1>
       <h1>Previously I worked in sales and merchdanising for luxury fashion companies like <a className="highlight" href="http://shopredone.com">RE/DONE</a>.</h1>
       <h1>Check out my <span className="highlight">projects</span> and <span className="highlight">CV</span> for more.
       <h1>Outside of that, I enjoy Overwatch, <a className="highlight" href="https://www.youtube.com/watch?v=tTCS3cAaM3I">90's twee pop</a>, and Keanu Reeves. I live in Brooklyn with my cat, <span className="highlight" onMouseEnter={handleBMouseOver}  onMouseLeave={handleMouseOut}>Bagel{bagelHover && <img src={Bagel} className="bagel" onMouseMove={(e)=>{moveMouseBImg(e)}} style={styles}/>} </span>.</h1>
 
       Still curious? <span className="highlight">message me</span>! </h1>

    </div>
    </div>
  );
}

export default App;
