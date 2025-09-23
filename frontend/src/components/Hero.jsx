import React from 'react';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content animar-entrada">
                <h1>Aprendé a Comunicar,<br /> Organizar y Liderar con éxito</h1>
                <p>Te enseño a mejorar tu comunicación, productividad y liderazgo para destacar en cualquier ámbito.</p>

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
        </section>
    );
}

export default Hero;
