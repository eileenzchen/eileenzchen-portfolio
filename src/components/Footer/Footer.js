import React from 'react'
import './Footer.css';
import { Container } from '@mui/material';
import {ReactComponent as LinkedIn} from '../../images/social-icons/linkedin.svg';
import {ReactComponent as Github} from '../../images/social-icons/github.svg';
import {ReactComponent as Email} from '../../images/social-icons/email.svg';

function Footer() {
  return (      
    <footer id="contact-me">
      <Container maxWidth="lg">
        <a href="https://www.linkedin.com/in/eileenzchen/" target="_blank" rel="noopener noreferrer"><LinkedIn className="social-icon"/></a>
        <a href="mailto:ezch09@gmail.com" target="_blank" rel="noopener noreferrer"><Email className="social-icon"/></a>
        <a href="https://github.com/eileenzchen" target="_blank" rel="noopener noreferrer nofollow"><Github className="social-icon"/></a>
        <p className="monospace-500 footer-text" style={{display: "flex", alignItems: "center", flexWrap: "wrap"}} >
          <span className="monospace-500">Contact me:&nbsp;</span>
          <a className="monospace-500" style={{whiteSpace: "nowrap"}} href="mailto:ezch09@gmail.com" target="_blank" rel="noopener noreferrer">ezch09@gmail.com</a> 
          &nbsp;/&nbsp;
          <a className="monospace-500" style={{whiteSpace: "nowrap"}} href="tel:240-481-0447">(240)&#8197;481-0447</a>
        </p>
        <p className="monospace-500 footer-text">© 2023 designed 🎨 and coded 👩🏻‍💻 by Eileen Chen with React and Material UI.</p>
      </Container>
    </footer>
  )
}

export default Footer