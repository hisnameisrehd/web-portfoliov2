import React from 'react';

import Video from '../../videos/header-video.mp4';

import {
  Container,
  Content,
  SocialSidebar,
  Greetings,
  MyName,
  Capabilities,
  ProfilePhoto,
  ProfileBorder,
  Quote,
  ProfileBg,
  VideoBg,
} from './Profile.styles';

import Typical from 'react-typical';
import Socials from '../../Socials';

const Profile = () => {
  return (
    <>
      <SocialSidebar>
        <Socials />
      </SocialSidebar>
      <Container id='home'>
        <ProfileBg>
          <VideoBg autoPlay loop muted src={Video} />
        </ProfileBg>
        <Content
          initial={{
            opacity: 0.1,
            duration: 2,
            x: 2000,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            stiffness: 60,
            type: 'spring',
            delay: 1,
            damping: 5,
          }}
        >
          <Greetings>
            <span>Hi there! My name is</span>
          </Greetings>
          <MyName>
            <h1>Rehd Colipano</h1>
          </MyName>
          <Capabilities>
            <h2>
              <Typical
                loop={Infinity}
                steps={[
                  'Front-end Developer...',
                  1000,
                  'React Developer...',
                  1000,
                  'PHP / Laravel Developer...',
                  1000,
                  'WordPress Developer...',
                  1000,
                  'Photographer...',
                  1000,
                ]}
              />
            </h2>
          </Capabilities>
          <Quote>
            <span>
              “Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand.” – Martin
              Fowler
            </span>
          </Quote>
        </Content>

        <Content>
          <ProfileBorder
            id='home'
            drag
            dragConstraints={{
              right: 20,
              left: 20,
              bottom: 20,
              top: 20,
            }}
            initial={{
              opacity: 0.1,
              duration: 0.5,
              y: 1000,
            }}
            animate={{
              opacity: 1,
              rotate: 360,
              y: 0,
            }}
            transition={{
              delay: 1.5,
              type: 'spring',
              stiffness: 20,
            }}
          >
            <ProfilePhoto></ProfilePhoto>
          </ProfileBorder>
        </Content>
      </Container>
    </>
  );
};

export default Profile;
