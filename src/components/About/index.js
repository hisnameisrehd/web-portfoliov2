import React, { useEffect } from 'react';
import { Container } from '../General/Container.styles';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import { Content, HireButton } from './About.styles';
import { Text } from '../General/Text.styles';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
    <Container id='about'>
      <Text>
        <Content
          className='About'
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={contentVariants}
        >
          <h1>about</h1>
          <p>
            Hi! I'm Rehd. My journey into tech started back in 2013 when I first
            began tinkering with custom{' '}
            <span>HTML & CSS on Facebook pages</span>. What began as a childhood
            curiosity evolved into a full-fledged career in tech—earning my{' '}
            <span>
              Diploma in Digital Media & Information Technology (Top Academic
              Performer at NAIT)
            </span>{' '}
            and building enterprise-grade applications.
          </p>
          <p>
            Today, I'm a{' '}
            <span>
              Configuration Analyst / Front-End Developer with nearly 5 years of
              experience building, deploying, and maintaining complex digital
              products.
            </span>{' '}
            Most recently at Forward Insurance Managers Ltd., I was a key
            technical contributor on the team that{' '}
            <span>
              built and deployed the company's core digital insurance portal
              from the ground up
            </span>
            —configuring user interfaces (JavaScript, HTML, CSS), integrating
            REST APIs (Swagger UI), and building custom SQL data pipelines. I
            thrive at the intersection of clean front-end UI, API integrations,
            and practical problem-solving. Outside of coding, you'll usually
            find me playing guitar and singing along to it.
          </p>

          <div>
            <p>
              Here are some of the skills that I've been currently working on:
            </p>
            <ul>
              <li>
                <IoMdArrowDroprightCircle />{' '}
                <p className='tags'>
                  <span>Front-End:</span> JavaScript, HTML5, CSS3/SASS, React.js
                </p>
              </li>
              <li>
                <IoMdArrowDroprightCircle />{' '}
                <p className='tags'>
                  <span>Back-End &amp; DB: </span>REST APIs, Microsoft SQL
                  (T-SQL), PHP & Laravel
                </p>
              </li>
              <li>
                <IoMdArrowDroprightCircle />{' '}
                <p className='tags'>
                  <span>Tools: </span>Git / GitHub, Jira (Agile), MGA Platform,
                  WordPress
                </p>
              </li>
              <li>
                <IoMdArrowDroprightCircle />{' '}
                <p className='tags'>
                  <span>Hobby: </span>Music Production, Photography, Video
                  Editing
                </p>
              </li>
            </ul>
          </div>

          <div>
            <HireButton
              to='contact'
              smooth={true}
              duration={true}
              spy={true}
              exact={true}
              offset={-80}
            >
              <p className='hire'>Hire me</p>
            </HireButton>
          </div>
        </Content>
      </Text>
    </Container>
  );
};

export default About;
