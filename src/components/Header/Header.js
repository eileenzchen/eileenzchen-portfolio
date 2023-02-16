import React from 'react'
import './Header.css';
import { Container } from '@mui/material';

function Header() {
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

export default Header