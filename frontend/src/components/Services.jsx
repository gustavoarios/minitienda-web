import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: "Conferencias y Charlas Motivacionales",
      description: "Inspiración y motivación para equipos y organizaciones a través de presentaciones dinámicas y contenido transformacional.",
      icon: "🎤"
    },
    {
      title: "Talleres Prácticos de Comunicación y Liderazgo",
      description: "Experiencias hands-on donde los participantes desarrollan habilidades prácticas de liderazgo y comunicación efectiva.",
      icon: "🎯"
    },
    {
      title: "Programas de Capacitación para Empresas",
      description: "Soluciones personalizadas de formación diseñadas específicamente para las necesidades de tu organización.",
      icon: "🏢"
    },
    {
      title: "Mentoría y Acompañamiento Personalizado",
      description: "Desarrollo individual con seguimiento personalizado para líderes que buscan potenciar su máximo potencial.",
      icon: "👥"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Mis Servicios</h2>
          <p>Transformo líderes y equipos a través de experiencias de aprendizaje únicas</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-button-container">
          <button className="services-button" onClick={() => window.location.href = '/services'}>
            ¿Cómo puedo ayudarte?
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
