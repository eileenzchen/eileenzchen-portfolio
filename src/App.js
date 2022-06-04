import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Container from '@mui/material/Container';
import Header from './components/Header/Header.js';
import Project1 from './components/Project1/Project1.js'
import NotFound from './components/NotFound/NotFound.js'
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="Site">
        <Header />
        <div className="SiteContent">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/project1" component={Project1}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>      
    </Router>
  );
}


export default App;
