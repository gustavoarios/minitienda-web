import React from 'react';
import Experience from '../components/Experience';
import Books from '../components/Books';

function About() {
  return (
    <div className="home">
      {/* Experiencia */}
      <Experience showButton={false} />
      {/* Separador sombreado */}
      <div className="about-section-separator"></div>
      {/* Libros */}
      <Books />
    </div>
  );
}

export default About;