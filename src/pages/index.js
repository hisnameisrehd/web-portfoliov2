import React, { useState, useEffect } from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';
import BeforeProjectContent from '../components/Projects/BeforeProjectContent';
import Contact from '../components/Contact';

import { ScaleLoader } from 'react-spinners';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {loading ? (
        <ScaleLoader color={'#00fffb'} loading={loading} size={100} />
      ) : (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Profile />
          <About />
          <Experience />
          <Education />
          <BeforeProjectContent />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;
