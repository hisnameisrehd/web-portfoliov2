import React from 'react';
import Socials from '../../Socials';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SocialsMobile,
} from './Sidebar.styles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='education' onClick={toggle}>
            Education
          </SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>
            <a href='Resume-Rehd.pdf' download='Rehd Colipano.pdf'>
              Resume
            </a>
          </SidebarRoute>
        </SideBtnWrap>
        <SocialsMobile>
          <Socials />
        </SocialsMobile>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
