import styled from 'styled-components';

import { FaTimes } from 'react-icons/fa';

import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  font-family: 'Encode Sans Expanded', sans-serif;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--blue);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and(max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  :hover {
    color: var(--blue);
    transition: 1s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.button`
  border-radius: 10px;
  background: transparent;
  font-size: 14px;
  padding: 16px 64px;
  outline: none;
  border: 1px solid var(--blue);
  cursor: pointer;
  color: #000;
  transition: all 0.2s ease-in-out;

  :hover {
    background: var(--blue);
    opacity: 0.8;
    color: #000;
    transition: all 0.2s ease-in-out;
  }

  :hover > * {
    color: #000;
  }

  a {
    color: var(--blue);

    :hover {
      color: #000;
    }
  }
`;

export const SocialsMobile = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 16px 5px;

  svg {
    font-size: 2rem;
    color: var(--blue);
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
