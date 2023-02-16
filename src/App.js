import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Container from '@mui/material/Container';
import Header from './components/Header/Header.js';
import What2Yum from './components/Projects/What2Yum/What2Yum.js'
import BakingFactory from './components/Projects/BakingFactory/BakingFactory.js'
import Fitvio from 'components/Projects/Fitvio/Fitvio';
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
      {/* take to top of page when redirect to new route */}
      <ScrollToTop />
      <div className="Site">
        <Header />
        <div className="SiteContent">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/what2yum" component={What2Yum}/>
            <Route path="/bakingfactory" component={BakingFactory}/>
            <Route path="/fitvio" component={Fitvio}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>      
    </Router>
  );
}


export default App;
