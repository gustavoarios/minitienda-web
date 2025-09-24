import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Courses from '../components/Courses';

function Home() {
  return (
    <div id="top" className="home">
      <Hero />
      <Experience />
      <Courses />
      
    </div>
  );
}

export default Home;
