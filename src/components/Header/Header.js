import React, { useEffect, useState } from 'react'
import './Header.css';
import { Container } from '@mui/material';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import {ReactComponent as LinkedIn} from './social-icons/linkedin.svg';
import {ReactComponent as Github} from './social-icons/github.svg';
import {ReactComponent as Email} from './social-icons/email.svg';
import linkedin from './social-icons/linkedin.svg'

function Header() {
  const location = useLocation();
  const navItemsObj = [{id: 0, label: 'work', path: '/'}, {id: 1, label: 'play', path: '/play'}, {id: 2, label: 'about', path: '/about'}, {id: 3, label: 'resume', path: '/resume'}];

  const [menuState, setMenuState] = useState('closed');

  const [activeNav, setActiveNav] = useState('');

  // set active nav item depending on page path
  useEffect(() => {
    const navItem = navItemsObj.filter((navItem) => 
      location.pathname === navItem.path
    );
    setActiveNav(navItem[0]?.label ?? '');
  }, [location]);  

  const navItems = navItemsObj.map( 
    (navItem) => 
    <Link to={navItem.path} className="nav-item link" onClick={() => {setActiveNav(navItem.label); toggleMenu();}}>
      <span className={`monospace-300 ${activeNav === navItem.label ? 'active': ''}`}>{navItem.label}</span>
    </Link>
  )

  // handle window resize for hamburger menu
  const [isSmallScreen, setSmallScreen] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = event => {
      event.preventDefault();
      if (window.innerWidth <= 900) {
        setSmallScreen(true);
      }
      else if (window.innerWidth > 900) {
        setSmallScreen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
     window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  // hamburger open or closed state
  const toggleMenu = event => {
    // event.preventDefault();
    if (!isSmallScreen) return;
    if (menuState == 'closed') {
      setMenuState('open');
      document.body.style.overflowY = 'hidden';
    }
    else {
      setMenuState('closed');
      document.body.style.overflowY = 'scroll';
    }
  };

  return (      
    <header className={menuState}>
      <Container maxWidth="xl"> 
        <div className="header-container">
          {/* name */}
          <a href="/" aria-label="home" className="logo-name">
            <span className="monospace-200 header-name">Eileen Z Chen</span>
          </a>
          {/* desktop nav */}
          {!isSmallScreen && 
            <nav className={"nav-wrap " + (isSmallScreen ? "hamburger" : "")} >
              <div className="nav-items">
                {navItems}
              </div>
              <div id="socials">
                <a href="https://www.linkedin.com/in/eileenzchen/" target="_blank" rel="noopener noreferrer"><LinkedIn className="social-icon"/></a>
                <a href="mailto:ezch09@gmail.com" target="_blank" rel="noopener noreferrer"><Email className="social-icon"/></a>
                <a href="https://github.com/eileenzchen" target="_blank" rel="noopener noreferrer"><Github className="social-icon"/></a>
              </div>
            </nav>
          }
          {isSmallScreen && 
            <section id="menu-container" className={"nav-wrap mobile " + menuState} >
              <div id="main-menu" className={menuState}>
                <div className="nav-items">
                  {navItems}
                </div>
                <div id="socials" className="nav-item">
                  <a href="https://www.linkedin.com/in/eileenzchen/" target="_blank" rel="noopener noreferrer"><LinkedIn className="social-icon" height={44} width={44}/></a>
                  <a href="mailto:ezch09@gmail.com" target="_blank" rel="noopener noreferrer"><Email className="social-icon" height={36} width={36}/></a>
                  <a href="https://github.com/eileenzchen" target="_blank" rel="noopener noreferrer"><Github className="social-icon" height={44} width={44}/></a>
                </div>
              </div>
              <nav role="navigation" aria-label="menu" onClick={toggleMenu} id='hamburgerContainer'>
                <button aria-expanded={menuState === 'open' ? true : false} id='hamburger' className={menuState} aria-controls="main-menu">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </nav>
            </section>
          }
        </div>
      </Container>
      {location.pathname !== '/' && !isSmallScreen &&
        <Container maxWidth="xl">
          <a href="/" className="return-home-link">
            <span className="return-home-container">
              <KeyboardArrowLeftRoundedIcon sx={{mr:1}} style={{marginTop: "1px"}}/>
              <span>return home</span>
            </span>
          </a>
        </Container>
      }
    </header>
  )
}

export default Header