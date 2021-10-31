import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

import { Container } from '../General/Container.styles';
import { Content } from './Contact.styles';
import { Text } from '../General/Text.styles';
import { Button } from '../General/Button.styles';

import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const form = useRef();
  const [isModalOpen, setisModalOpen] = useState('none');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hftbhik',
        'template_fiirmt5',
        form.current,
        'user_PvK3M1xf0C5PPT4DzG6TS'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setisModalOpen('block');
    e.target.reset();
  };

  const contentVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1,
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
    <Container>
      <Content
        id='contact'
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={contentVariants}
      >
        <Text>
          <div className='modal' style={{ display: isModalOpen }}>
            Success!
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <h1>Hey, feel free to drop a message here!</h1>
            <div>
              <p>
                I'm currently looking for a company that can make me a better
                developer particularly in React! I am confident that I can bring
                a growth on a company that will hire me.
              </p>
            </div>
            <div>
              <label>Name</label>
              <input type='text' name='name' required />
            </div>
            <div>
              <label>Email</label>
              <input type='email' name='email' required />
            </div>
            <div>
              <label>Message</label>
              <textarea name='message' required />
            </div>
            <div>
              <Button type='submit'>
                {/* <input type='submit' value='Send' /> */}
                Send
              </Button>
            </div>
          </form>
        </Text>
      </Content>
    </Container>
  );
};

export default Contact;
