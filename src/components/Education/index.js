import React, { useState } from 'react';
import { Container } from '../General/Container.styles';
import { Content } from './Education.styles';
import { Text } from '../General/Text.styles';
import { RiArrowRightSLine } from 'react-icons/ri';

const Education = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Container id='education'>
      <Text>
        <Content>
          <h1>education</h1>
          <div className='tablist'>
            <div className='block-tabs'>
              <div
                className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                onClick={() => toggleTab(1)}
              >
                <p>Northern Alberta Institute of Technology</p>
              </div>
              <div
                className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                onClick={() => toggleTab(2)}
              >
                <p>University of Santo Tomas</p>
              </div>
              <div
                className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                onClick={() => toggleTab(3)}
              >
                <p>Saint Benedict School of Novaliches</p>
              </div>
            </div>

            <div className='content-tabs'>
              <div
                className={
                  toggleState === 1 ? 'content active-content' : 'content'
                }
              >
                <h2>Northern Alberta Institute of Technology, Canada</h2>
                <p className='date'>September 2018 - April 2021</p>
                <p>
                  <RiArrowRightSLine />
                  Digital Media and IT
                </p>
                <p>
                  <RiArrowRightSLine />
                  Web Design and Development
                </p>
                <p>
                  <RiArrowRightSLine />
                  Diploma
                </p>
                <p>
                  <RiArrowRightSLine />
                  NAIT Top Academic Performer (Fall 2018)
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? 'content active-content' : 'content'
                }
              >
                <h2>University of Santo Tomas, Philippines</h2>
                <p className='date'>September 2014 - May 2017</p>
                <p>
                  <RiArrowRightSLine />
                  Institute of Information and Computing Sciences
                </p>
                <p>
                  <RiArrowRightSLine />
                  Back-end Developer
                </p>
                <p>
                  <RiArrowRightSLine />
                  Society of Information Technology Enthusiasts - Member
                  (Organization)
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? 'content active-content' : 'content'
                }
              >
                <h2>Saint Benedict School of Novaliches, Philippines</h2>
                <p className='date'>June 2010 - March 2014</p>
                <p>
                  <RiArrowRightSLine />
                  High School Diploma
                </p>
              </div>
            </div>
          </div>
        </Content>
      </Text>
    </Container>
  );
};

export default Education;
