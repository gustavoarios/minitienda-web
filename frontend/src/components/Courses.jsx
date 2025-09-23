import React, { useState, useEffect } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simular carga de cursos
    const sampleCourses = [
      { id: 1, title: 'Desarrollo Web Frontend', price: 100, description: 'Aprende React, HTML, CSS y JavaScript' },
      { id: 2, title: 'Backend con Node.js', price: 150, description: 'Desarrollo de APIs y servidores' },
      { id: 3, title: 'Diseño UX/UI', price: 120, description: 'Principios de diseño y experiencia de usuario' }
    ];
    setCourses(sampleCourses);
  }, []);

  return (
    <section className="courses">
      <div className="courses-container">
        <h2>Nuestros Cursos</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <span className="price">${course.price}</span>
              <button className="enroll-button">Inscribirse</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
