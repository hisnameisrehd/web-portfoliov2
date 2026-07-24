import React from 'react';

import {
  BsFacebook,
  BsInstagram,
  BsTwitch,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';

import { motion } from 'framer-motion';

const Socials = () => {
  return (
    <>
      <motion.ul
        className='socials'
        initial={{
          opacity: 0.1,
          duration: 1.5,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 3,
        }}
      >
        <li>
          <a
            href='https://github.com/hisnameisrehd'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/rehd-colipano/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsLinkedin />
          </a>
        </li>
      </motion.ul>
    </>
  );
};

export default Socials;
