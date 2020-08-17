import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Resume from './Resume';
import * as serviceWorker from './serviceWorker';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import { TransitionGroup, CSSTransitionGroup } from 'react-transition-group';

ReactDOM.render(
  <Router>
  
  

    <Route path="/"component={App}/>

    <Route path="/resume">
    <Resume
    key={13}/>
    </Route>

    <Route path="/contact" exact component={Contact}/>

    <Route path="/projects">
    <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
    <Projects
    key={4}/>
    </CSSTransitionGroup>
  
    </Route>

   
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
