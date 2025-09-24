import React from 'react';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content animar-entrada">
                <h1>Aprendé a Comunicar,<br /> Organizar y Liderar con éxito</h1>
                <p>Te ayudo a mejorar tu comunicación, productividad y liderazgo para destacar.</p>

                <div className="boton-consulta">
                    <a
                        href="https://api.whatsapp.com/send/?phone=12345678"
                        className="btn btn-outline-light"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Enviame tu consulta!
                    </a>
                </div>
            </div>

            <div className="chevron-container">
                <a href="#experience" className="chevron-link">
                    <img src="/flecha.png" alt="Flecha hacia abajo" className="chevron-svg" />
                </a>
            </div>
        </section>
    );
}

export default Hero;
