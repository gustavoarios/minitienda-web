import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    showToastNotification('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSocialClick = (socialName, e) => {
    e.preventDefault();
    showToastNotification(`¡Acá se redireccionaría a tu ${socialName}!`);
  };

  const showToastNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      {notification && (
        <div className="toast-notification">
          {notification}
        </div>
      )}
      
      <div className="container">
        <div className="contact-header">
          <h2>Contacto</h2>
          <p>¿Tienes alguna pregunta o quieres saber más sobre mis servicios? ¡Escríbeme!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <p>+54 9 11 1234-5678</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>blanca.cortes@email.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div className="contact-details">
                <h4>Redes Sociales</h4>
                <div className="social-links">
                  <a href="#" className="social-link" onClick={(e) => handleSocialClick('Instagram', e)}>📷 Instagram</a>
                  <a href="#" className="social-link" onClick={(e) => handleSocialClick('LinkedIn', e)}>💼 LinkedIn</a>
                  <a href="#" className="social-link" onClick={(e) => handleSocialClick('YouTube', e)}>📺 YouTube</a>
                  <a href="#" className="social-link" onClick={(e) => handleSocialClick('Facebook', e)}>📘 Facebook</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
