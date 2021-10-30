import React from 'react';

import {
  BsFacebook,
  BsInstagram,
  BsTwitch,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';

const Socials = () => {
  return (
    <>
      <ul className='socials'>
        <li>
          <a
            href='https://www.facebook.com/hisnameisrehd/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsFacebook />
          </a>
        </li>
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
        <li>
          <a
            href='https://twitter.com/HisNameIsRehd'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsTwitter />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/HisNameIsRehd'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href='https://www.twitch.tv/itwixvalorant'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsTwitch />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
