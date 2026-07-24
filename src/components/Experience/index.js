import React, { useState, useEffect } from 'react';
import { Container } from '../General/Container.styles';
import { Content } from './Experience.styles';
import { Text } from '../General/Text.styles';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
    <Container id='experience'>
      <Text>
        <Content
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={contentVariants}
        >
          <h1>experience</h1>
          <div className='tablist'>
            <div className='block-tabs'>
              <div
                className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                onClick={() => toggleTab(1)}
              >
                <p>Forward Insurance Managers Ltd.</p>
              </div>
            </div>

            <div className='content-tabs'>
              <div
                className={
                  toggleState === 1 ? 'content active-content' : 'content'
                }
              >
                <h2>Configuration Analyst</h2>
                <p className='date'>November 2021 - Present</p>
                <p>
                  <RiArrowRightSLine />
                  <span>Portal Development & Launch:</span> Key technical
                  contributor on the core launch team that designed, built, and
                  deployed the company's digital insurance portal from the
                  ground up across configuration, testing, and release phases
                </p>
                <p>
                  <RiArrowRightSLine />
                  <span>Digital Product Configuration:</span> Configure, build,
                  and maintain digital insurance products on an enterprise
                  platform using JavaScript, HTML5, and CSS3.
                </p>
                <p>
                  <RiArrowRightSLine />
                  <span>API Integration:</span> Configure and implement
                  third-party APIs (such as geocoding/location intelligence) to
                  pinpoint risk locations and automate underwriting logic.
                </p>
                <p>
                  <RiArrowRightSLine />
                  <span>Data Analysis & Reporting:</span> Write custom queries
                  in Microsoft SQL to extract key datasets and build financial
                  and operational reports, including Gross Written Premiums
                  (GWP)
                </p>
                <p>
                  <RiArrowRightSLine />
                  <span>Version Control & Agile Workflow:</span> Manage
                  repository version control, code updates, and releases using
                  GitHub, while tracking daily tasks and deliverables in Jira
                  within Agile workflows
                </p>
              </div>
            </div>
          </div>
        </Content>
      </Text>
    </Container>
  );
};

export default Experience;
