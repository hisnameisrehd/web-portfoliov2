import React, { useState, useEffect } from 'react';

import { animateScroll as scroll } from 'react-scroll';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  Hamburger,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar.styles';

import { FaBars } from 'react-icons/fa';

import logo from '../../images/logo.svg';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav
        scrollNav={scrollNav}
        initial={{
          opacity: 0.1,
          duration: 2,
          y: 2000,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          stiffness: 100,
          type: 'spring',
        }}
      >
        <NavbarContainer>
          <NavLogo
            onClick={toggleHome}
            to='home'
            smooth={true}
            duration={true}
            spy={true}
            exact={true}
            offset={-80}
          >
            <img src={logo} alt='my-logo' />
          </NavLogo>
          <Hamburger onClick={toggle}>
            <FaBars />
          </Hamburger>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={true}
                spy={true}
                exact={true}
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='education'
                smooth={true}
                duration={true}
                spy={true}
                exact={true}
                offset={-80}
              >
                Education
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='projects'
                smooth={true}
                duration={true}
                spy={true}
                exact={true}
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={true}
                spy={true}
                exact={true}
                offset={-60}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <a href='Resume - Rehd Colipano.pdf' download='Rehd Colipano.pdf'>
              <NavBtnLink>Resume</NavBtnLink>
            </a>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
