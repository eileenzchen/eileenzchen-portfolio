import React from 'react'
import './Header.css';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

function Header() {
  const location = useLocation();
  if (location.pathname !== '/') {
    return (
      <header>
        <Container maxWidth="xl">
          <a href="/">
            <p className="monospace-200 header-name">Eileen Z Chen</p>
            <p className="monospace-400 header-subheading">designer x engineer</p>
          </a>
        </Container>
      </header>
    )

  }
  return (      
    <header>
      <Container maxWidth="xl">
        <p className="monospace-200 header-name">Eileen Z Chen</p>
        <p className="monospace-400 header-subheading">designer x engineer</p>
      </Container>
    </header>
  )
}

export default Header