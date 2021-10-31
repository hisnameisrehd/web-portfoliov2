import React, { useEffect } from 'react';
import { Tags, Content, List } from '../Projects/Projects.styles';
import { Button } from '../General/Button.styles';
import { FiGithub } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = ({
  id,
  title,
  imgUrl,
  alt,
  description,
  tags,
  siteUrl,
  hasButton,
  imgStart,
  githubLink,
  hasGit,
  hasWebsite,
}) => {
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
    <List id={id}>
      <Content
        className={imgStart}
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={contentVariants}
      >
        <div className='project-image'>
          <img src={imgUrl} alt={alt} />
        </div>
        <div className='project-desc'>
          <h2 className='underline'>
            <a href={siteUrl} target='_blank' rel='noopener noreferrer'>
              {title}
            </a>
          </h2>
          <p className='desc'>{description}</p>
          <Tags>
            <p className='tags'>{tags}</p>
          </Tags>
          <Button className={`${hasButton} button-website`}>
            <a
              className={`${hasGit}`}
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiGithub />
            </a>
            <a
              className={`${hasWebsite}`}
              href={siteUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <CgWebsite />
            </a>
          </Button>
        </div>
      </Content>
    </List>
  );
};

export default Projects;
