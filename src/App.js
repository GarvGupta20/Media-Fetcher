//jshint esversion:9
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Starred from "./pages/starred.js";

import Home from "./pages/Home.js";

import Show from "./pages/Show.js";


import MainPageLayout from "./components/mainPageLayout.js";

import {ThemeProvider} from "styled-components";



const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  }
};



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>

    {/* switch and route components to render the following pages */}
    <Switch>
    <Route path="/">
        <MainPageLayout />
    </Route>    {/* the route components simply matches the path and render the componet inside it  */}
    <Route path="/show/:id">
        <Show />
    </Route>
    <Route path="/Starred">

        <Starred />
    </Route>
    <Route>
        <div>
           The page you are trying to look for cannot be found
        </div>
    </Route>
    </Switch>

    </Router>

    </ThemeProvider>
    </>
  );
}

export default App;




 //error will be of eslint configuration hence to escape the error just cd in the command line with Desktop not desktop as react is case-sensitive
