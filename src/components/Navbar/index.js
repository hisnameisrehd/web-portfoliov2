import React from 'react';

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

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to='home'
            smooth={true}
            duration={true}
            spy={true}
            exact={true}
            offset={-80}
          >
            RC
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
            <a href='Resume-Rehd.pdf' download='Rehd Colipano.pdf'>
              <NavBtnLink>Resume</NavBtnLink>
            </a>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
