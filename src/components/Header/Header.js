import React from 'react'
import './Header.css';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

function Header() {
  const location = useLocation();
  if (location.pathname !== '/') {
    return (
      <header>
        <Container maxWidth="xl">
          <a href="/">
            <p className="monospace-200 header-name">Eileen Z Chen</p>
            <p className="monospace-400 header-subheading">ux designer x engineer</p>
          </a>
        </Container>
        <Container maxWidth="xl" style={{marginLeft:"0px"}}>
        <a href="/" className="return-home-link">
          <span className="return-home-container">
            <KeyboardArrowLeftRoundedIcon sx={{mr:1}} style={{marginTop: "1px"}}/>
            <span>return home</span>
          </span>
        </a>
      </Container>
      </header>
    )

  }
  return (      
    <header>
      <Container maxWidth="xl">
        <p className="monospace-200 header-name">Eileen Z Chen</p>
        <p className="monospace-400 header-subheading">ux designer x engineer</p>
      </Container>
    </header>
  )
}

export default Header