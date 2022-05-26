import React from 'react'
import './Footer.css';
import { Container } from '@mui/material';
import {ReactComponent as LinkedIn} from '../../images/social-icons/linkedin.svg';
import {ReactComponent as Github} from '../../images/social-icons/github.svg';
import {ReactComponent as Email} from '../../images/social-icons/email.svg';

function Footer() {
  return (      
    <footer>
      <Container maxWidth="lg">
        <a href="https://www.linkedin.com/in/eileenzchen/" target="_blank"><LinkedIn className="social-icon"/></a>
        <a href="mailto:ezch09@gmail.com" target="_blank"><Email className="social-icon"/></a>
        <a href="https://github.com/eileenzchen" target="_blank"><Github className="social-icon"/></a>
        <p className="monospace-500 footer-text">© 2022 designed 🎨 and coded 👩🏻‍💻 by Eileen Chen with React and Material UI.</p>
      </Container>
    </footer>
  )
}

export default Footer