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
            Hi! My name is Rehd.{' '}
            <span>I love developing things at the front-end</span>. I started
            loving this hobby back in 2013 when Facebook introduced welcome page
            on a certain Facebook page. That's where I started coding basic HTML
            and CSS.
          </p>
          <p>
            Moving forward today, since I'm a fresh graduate, my objective is to
            be a <span>competitive developer</span> and expand my knowledge and
            experience on React, WordPress and Laravel
          </p>
          <p>
            I know I just finished graduating last summer in 2021, but{' '}
            <span>I am confident that I can bring growth on a company</span>{' '}
            that will hire me
          </p>

          <div>
            <p>
              Here are some of the skills that I've been currently working on:
            </p>
            <ul>
              <li>
                <IoMdArrowDroprightCircle />{' '}
                <p className='tags'>HTML &amp; CSS</p>
              </li>
              <li>
                <IoMdArrowDroprightCircle />{' '}
                <p className='tags'>JavaScript (ES6+)</p>
              </li>
              <li>
                <IoMdArrowDroprightCircle /> <p className='tags'>React.js</p>
              </li>
              <li>
                <IoMdArrowDroprightCircle /> <p className='tags'>WordPress</p>
              </li>
              <li>
                <IoMdArrowDroprightCircle />{' '}
                <p className='tags'>Laravel (PHP)</p>
              </li>
              <li>
                <IoMdArrowDroprightCircle /> <p className='tags'>Photography</p>
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
