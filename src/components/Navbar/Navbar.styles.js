import styled from 'styled-components';

import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: #0a192f;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;

  @media screen and (min-width: 720px) {
    max-width: 600px;
  }
  @media screen and (min-width: 920px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1165px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1165px;
  }
`;

export const NavLogo = styled(LinkS)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 720px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--blue);
  }
  @media screen and (min-width: 440px) {
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-size: 14px;

  &.active {
    border-bottom: 3px solid var(--blue);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.button`
  border-radius: 50px;
  background: var(--blue);
  white-space: nowrap;
  padding: 10px 15px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-size: 14px;

  :hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;
