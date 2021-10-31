import { motion } from 'framer-motion';
import styled from 'styled-components';
// image
import img from '../../images/me.jpg';

export const Container = styled.div`
  color: #fff;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  height: 100vh;
  padding: 10px;

  /* add :before styles here  */
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: -998;
  }

  @media screen and (min-width: 720px) {
    max-width: 600px;
    flex-direction: row;
    justify-content: space-between;
    padding: 35px 0;
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

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 720px) {
    display: block;
    text-align: left;
  }
`;

export const SocialSidebar = styled.div`
  position: fixed;
  bottom: 5%;
  width: 60px;

  .socials hr {
    width: 100px;
    height: 1px;
  }

  .socials li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .socials a > * {
    color: var(--blue);
    font-size: var(--fontBig);
    margin-left: 10px;
    margin-bottom: 10px;
    opacity: 0.5;
    transition: 0.3s ease-in-out;

    :hover {
      opacity: 1;
      font-size: var(--fontSuperBig);
      transition: 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 720px) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    width: 90px;
  }
`;

export const Greetings = styled.div`
  @media screen and (min-width: 1165px) {
    span {
      font-size: 24px;
    }
  }
`;

export const MyName = styled.div`
  font-family: 'Arizonia', cursive;
  opacity: 0.6;
  transition: 0.5s ease-in-out;

  :hover {
    opacity: 1;
    transition: 0.5s ease-in-out;
  }

  h1 {
    font-size: 50px;
  }

  @media screen and (min-width: 1165px) {
    h1 {
      font-size: 80px;
      letter-spacing: 10px;
    }
  }
`;

export const Capabilities = styled.div`
  @media screen and (min-width: 1165px) {
    h2 {
      font-size: 64px;
      letter-spacing: 10px;
    }
  }
`;

export const ProfileBorder = styled(motion.div)`
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 0 0 #fff;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 16px;

  @media screen and (min-width: 720px) {
    width: 320px;
    height: 320px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1165px) {
    width: 380px;
    height: 380px;
  }
`;

export const ProfilePhoto = styled.div`
  height: 92%;
  width: 92%;
  background-image: url(${img});
  background-size: cover;
  border-radius: 50%;

  @media screen and (min-width: 1165px) {
    filter: brightness(0.25);
    filter: saturate(0.25);
    transition: 0.2s ease-in-out;

    :hover {
      filter: brightness(1);
      filter: saturate(1.5);
      transition: 0.2s ease-in-out;
    }
  }
`;

export const Quote = styled.div`
  margin: 24px 0;

  span {
    font-family: 'Encode Sans Expanded', sans-serif;
    font-style: italic;
    font-size: 16px;

    @media screen and (min-width: 1165px) {
      font-size: 18px;
    }
  }
`;

export const ProfileBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -999;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
