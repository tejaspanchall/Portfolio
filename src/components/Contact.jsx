import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`;

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}} 
        className='my-10 text-center text-4xl'>
        Get in Touch
      </motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.a 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}} 
          href={gmailLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='border-b hover:text-purple-500 transition-colors duration-300'
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  )
}

export default Contact;