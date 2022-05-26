import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from '@mui/material/Container';
import Header from './components/Header/Header';

function App() {
  return (
    <div id="About">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
