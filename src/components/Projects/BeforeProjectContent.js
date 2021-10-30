import React from 'react';
import { Container } from '../General/Container.styles';
import { Text } from '../General/Text.styles';
import { Content } from './BeforeProjectContent.style';
import Projects from '.';
import { projectOne, projectThree, projectTwo } from './ProjectData';

const BeforeProjectContent = () => {
  return (
    <Container>
      <Content id='projects'>
        <Text>
          <h1>projects</h1>
          <div className='project-container'>
            <ul>
              <Projects {...projectThree} />
              <Projects {...projectTwo} />
              <Projects {...projectOne} />
            </ul>
          </div>
        </Text>
      </Content>
    </Container>
  );
};

export default BeforeProjectContent;
