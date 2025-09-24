import React, { useState, useEffect, useRef } from 'react';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
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
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.3 } // Se activa cuando 30% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

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
          {/* <div className="experience-icon">
            <i className="fas fa-award"></i>
          </div> */}
          <h2>Blanca Cortés</h2>
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
      </div>
    </section>
  );
}

export default Experience;