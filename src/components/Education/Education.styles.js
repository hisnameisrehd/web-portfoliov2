import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Content = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .tablist {
    margin: 24px 0;

    @media screen and (min-width: 720px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  h2 {
    text-align: left;
    margin-bottom: 25px;
  }

  .date {
    font-style: italic;
  }

  .block-tabs {
    display: flex;
    overflow-x: scroll;

    @media screen and (min-width: 290px) {
      overflow-x: hidden;
    }

    @media screen and (min-width: 720px) {
      flex-direction: column;
      flex-basis: 26%;
      border-left: 2px solid #bfbfbf;
    }
  }
  .tabs {
    padding: 12px;
    text-align: center;
    cursor: pointer;
    outline: none;
    transition: all 0.5s ease-in-out;
  }

  .active-tabs {
    border-bottom: 5px solid var(--blue);
    color: var(--blue);
    transition: all 0.5s ease-in-out;

    @media screen and (min-width: 720px) {
      background: #122f59;
      border-bottom: none;
      transition: all 0.5s ease-in-out;
    }
  }

  .active-tabs::before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: rgb(88, 147, 241);
  }

  button {
    border: none;
  }
  .content-tabs {
    flex-grow: 1;

    @media screen and (min-width: 720px) {
      flex-basis: 50%;
      padding-left: 32px;
    }
  }
  .content {
    padding: 20px;
    width: 100%;
    display: none;
  }
  .content hr {
    width: 100px;
    height: 2px;
    background: #222;
    margin-bottom: 5px;
  }
  .content p {
    width: 100%;
  }
  .active-content {
    display: block;
    transition: all 0.5s ease-in-out;
  }
`;
