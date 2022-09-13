//jshint esversion:9
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from "./pages/About.js";

import Home from "./pages/Home.js";


import MainPageLayout from "./components/mainPageLayout.js";


function App() {
  return (
    <>
    <Router>

    {/* switch and route components to render the following pages */}
    <Switch>
    <Route exact path="/">
        <MainPageLayout />
    </Route>
    <Route exact path="/home">    {/* the route components simply matches the path and render the componet inside it  */}
        <MainPageLayout />
        <Home />
    </Route>
    <Route exact path="/about">
        <MainPageLayout />
        <About />
    </Route>
    <Route>
        <div>
           The page you are trying to look for cannot be found
        </div>
    </Route>
    </Switch>

    </Router>


    </>
  );
}

export default App;




 //error will be of eslint configuration hence to escape the error just cd in the command line with Desktop not desktop as react is case-sensitive
