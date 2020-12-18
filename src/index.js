import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Resume from './Components/Resume';
import * as serviceWorker from './serviceWorker';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import { TransitionGroup, CSSTransitionGroup } from 'react-transition-group';

ReactDOM.render(
  <Router>

    <Route path="/"component={App}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/projects" exact  component={Projects}/>

  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
