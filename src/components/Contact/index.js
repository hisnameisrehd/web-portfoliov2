import React, { useRef, useState, useEffect } from 'react';

//email-js
import emailjs from '@emailjs/browser';

import { Container } from '../General/Container.styles';
import { Content } from './Contact.styles';
import { Text } from '../General/Text.styles';
import { Button } from '../General/Button.styles';

import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const form = useRef();
  const [isModalOpen, setisModalOpen] = useState('none');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('');

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          setStatusMessage('Message has been sent. Talk soon!');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS error', error);
          setStatusMessage('Failed. Please try again.');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
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
            <h1>Drop message for inquiries</h1>
            <div>
              <p>
                I'm always open to new opportunities where I can solve
                challenging problems, contribute to impactful products, and
                continue growing alongside a talented team. If you're looking
                for a developer who brings strong technical skills and a
                dedication to quality, let's connect!
              </p>
            </div>
            {/* Display status message when form is sent/fails */}
            {statusMessage && (
              <p
                style={{
                  color: statusMessage.includes('Failed')
                    ? '#ff4d4d'
                    : '#00fffb',
                  marginTop: '10px',
                }}
              >
                {statusMessage}
              </p>
            )}
            <div>
              <label>Name</label>
              <input type='text' name='user_name' required />
            </div>
            <div>
              <label>Email</label>
              <input type='email' name='user_email' required />
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
