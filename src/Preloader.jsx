import React, { useEffect, useRef } from 'react'
import { useState} from 'react';
import TypewriterComponent from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';




function PreLoader() {
  const preloaderRef = useRef(null);
  useEffect(() => {
    const fadeout = () => {
      preloaderRef.current.style.opacity = '1';
      setTimeout(() => {
        preloaderRef.current.style.display = 'none';
      }, 1000); // Delay the display none by 30000 milliseconds
    };

    fadeout();
  }, []);
  
  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-inner">
            <span class="preloader__square span"></span>
            <span class="preloader__square span"></span>
            <span class="preloader__square span"></span>
            <span class="preloader__square span"></span>
      </div>
      <div className='typpp'>

      </div>
  </div>

  )
}

export default PreLoader
