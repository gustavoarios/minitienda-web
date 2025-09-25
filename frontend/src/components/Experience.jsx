import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

function Experience() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 3,
      prefix: "",
      suffix: "",
      label: "libros"
    },
    {
      number: 10,
      prefix: "+",
      suffix: "",
      label: "años de experiencia"
    },
    {
      number: 500,
      prefix: "+",
      suffix: "",
      label: "profesionales capacitados"
    },
    {
      number: 1500,
      prefix: "+",
      suffix: "",
      label: "conferencias dictadas en 5 países"
    }
  ];

  // Detectar cuando la sección entra en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCountAnimation();
        }
      },
      { threshold: 0.1 } // Reducir threshold para que se active antes
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]); // Agregar hasAnimated como dependencia

  // Función para animar los números
  const startCountAnimation = () => {
    stats.forEach((stat, index) => {
      let currentNumber = 0;
      const increment = stat.number / 50; // 50 pasos para la animación
      const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= stat.number) {
          currentNumber = stat.number;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(currentNumber);
          return newCounters;
        });
      }, 40); // Actualiza cada 40ms (animación de ~2 segundos)
    });
  };

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience-container">
        <div className="experience-header">
          <h2>Blanca Cortés</h2>
        </div>

        <div className="experience-content">
          <div className="experience-image">
            <img src="/me-image.png" alt="Blanca Cortés" />
          </div>
          <div className="experience-text">
            <h3>Master en Comunicación y Liderazgo</h3>
            <p>
              <strong>Descubrí la formación que ofrece nuestra profesional</strong>, diseñada para potenciar tus habilidades y acompañarte en tu desarrollo. Podés explorar todos los detalles ingresando a la pestaña <strong>“Formación”</strong> o haciendo <strong>click aquí debajo al contenido de tu interés</strong>. Encontrarás <strong>dos secciones principales</strong>: una con <strong>recursos gratuitos</strong>, ideales para empezar a aprender sin compromiso, y otra con <strong>cursos completos</strong>, pensados para quienes buscan profundizar y avanzar más rápido. Dependiendo de tu elección, serás redirigido al apartado correspondiente para acceder a todo el material disponible.
            </p>


          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">
                {stat.prefix}{counters[index]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="experience-button-container">
          <button className="experience-button" onClick={() => window.location.href = '/about'}>
            Conoce más sobre mí
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;