import React from "react";
import {Switch, Route} from "react-router-dom";

import LandingPage from "./landingpage";
import Mission from "./Mission";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

 
// main js is for routing components to index.js

const Main = () => (
    <Switch>
    <Route  path="/" component={LandingPage} /> 
    <Route  path="/Mission" component={Mission} /> 
    <Route  path="/Portfolio" component={Portfolio} /> 
    <Route  path="/Resume" component={Resume} /> 
    <Route  path="/Contact" component={Contact} /> 
    </Switch>
)

export default Main; 