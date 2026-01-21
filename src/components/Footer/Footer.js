import React from 'react'
import './Footer.css';
import { Container } from '@mui/material';

function Footer() {
  return (      
    <Container maxWidth="lg" id="footer">
      <footer id="contact-me">
        {/* <p className="monospace-500 footer-text" style={{display: "flex", alignItems: "center", flexWrap: "wrap"}} >
          <span className="monospace-500">Contact me:&nbsp;</span>
          <a className="monospace-500" style={{whiteSpace: "nowrap"}} href="mailto:ezch09@gmail.com" target="_blank" rel="noopener noreferrer">ezch09@gmail.com</a> 
          &nbsp;/&nbsp;
          <a className="monospace-500" style={{whiteSpace: "nowrap"}} href="tel:240-481-0447">(240)&#8197;481-0447</a>
        </p> */}
        <p className="monospace-500 footer-text">© 2026 designed 🎨 and coded 👩🏻‍💻 by Eileen Chen with React and Material UI.</p>
      </footer>
    </Container>
  )
}

export default Footer