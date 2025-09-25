import React from 'react';

function Courses() {
  return (
    <section className="courses">
      <div className="courses-container">
        <div className="courses-header">
          <h2>Formación</h2>
          <p>
            <strong>Descubrí la formación que ofrece nuestra profesional</strong>, diseñada para potenciar tus habilidades y acompañarte en tu desarrollo. Podés explorar todos los detalles ingresando a la pestaña <strong>“Formación”</strong> o haciendo <strong>click aquí debajo al contenido de tu interés</strong>. Encontrarás <strong>dos secciones principales</strong>: una con <strong>recursos gratuitos</strong>, ideales para empezar a aprender sin compromiso, y otra con <strong>cursos completos</strong>, pensados para quienes buscan profundizar y avanzar más rápido. Dependiendo de tu elección, serás redirigido al apartado correspondiente para acceder a todo el material disponible.
          </p>

        </div>

        <div className="formation-cards">
          <div className="formation-card">
            <h3>Recursos</h3>
            <p>Accede a materiales gratuitos, artículos, guías y herramientas prácticas para comenzar tu desarrollo en liderazgo y comunicación.</p>
            <button className="formation-button" onClick={() => window.location.href = '/recursos'}>
              Explorar Recursos
            </button>
          </div>

          <div className="formation-card">
            <h3>Cursos</h3>
            <p>Programas completos y estructurados diseñados para transformar tu manera de liderar y comunicarte de forma efectiva.</p>
            <button className="formation-button" onClick={() => window.location.href = '/cursos'}>
              Ver Cursos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Courses;
