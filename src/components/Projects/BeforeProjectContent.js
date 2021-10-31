import React, { useEffect } from 'react';
import { Container } from '../General/Container.styles';
import { Text } from '../General/Text.styles';
import { Content } from './BeforeProjectContent.style';
import Projects from '.';
import { projectOne, projectThree, projectTwo } from './ProjectData';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BeforeProjectContent = () => {
  const contentVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <Container>
      <Content id='projects'>
        <Text>
          <motion.h1
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={contentVariants}
          >
            projects
          </motion.h1>
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
