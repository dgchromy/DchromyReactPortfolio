import React, { Component } from 'react';
// import Main from './components/main';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './components/Contact';
import Landing from './components/landingpage';
import Portfolio from './components/Portfolio';
import Mission from './components/Mission';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
     
  
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </div>
      </Router>
    

    );
  }
}

export default App;