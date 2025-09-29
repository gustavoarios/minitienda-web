import React from 'react';
import Experience from '../components/Experience';
import Books from '../components/Books';

function About() {
  return (
    <div className="home">
      {/* Experiencia */}
      <Experience showButton={false} />
      {/* Libros */}
      <Books />
    </div>
  );
}

export default About;