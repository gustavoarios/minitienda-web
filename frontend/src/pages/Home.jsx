import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Courses from '../components/Courses';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Home() {
  return (
    <div id="top" className="home">
      <Hero />
      <Experience />
      <Services />
      <Courses />
      <Contact />
    </div>
  );
}

export default Home;
