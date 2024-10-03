import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/Profile.jpg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

const Hero = () => {
  const titles = ['Software Engineer', 'Full Stack Developer'];
  const [currentTitle, setCurrentTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 50 : 100;
  const pauseBeforeDelete = 1000;
  const pauseBetweenTyping = 100;

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[loopNum % titles.length];

      if (isDeleting) {
        setCurrentTitle(fullTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentTitle(fullTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === fullTitle.length) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && charIndex === 0) {
        setTimeout(() => {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }, pauseBetweenTyping);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopNum]);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
              <div className='flex flex-col items-center lg:items-start'>
                  <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin tracking-tigh lg:mt-16 lg:text8xl'>
                    Tejas Panchal
                  </motion.h1>
                  <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                    {currentTitle}
                    <span className="blinking-cursor">|</span>
                  </motion.span>
                  <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-1 max-w-xl py-6 font-light tracking-tighter'>
                    {HERO_CONTENT}
                  </motion.p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
              <div className='flex justify-center'>
                <motion.img 
                  initial={{x: 100, opacity: 0}} 
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 1, delay: 1.2}}
                  src={profilePic} 
                  className='rounded-2xl' 
                  alt="Tejas Panchal" />
              </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;