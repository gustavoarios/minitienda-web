import React, { useRef, useEffect, useState } from 'react';
import './Books.css';

const books = [
    {
        title: 'Liderazgo en Acción',
        description: 'Un recorrido práctico y motivador sobre cómo convertirse en un líder que inspira y moviliza a su equipo. A través de ejemplos reales y estrategias probadas, muestra cómo tomar decisiones efectivas bajo presión. Invita a desarrollar habilidades de comunicación, empatía y visión. Es una guía para quienes buscan liderar con propósito en entornos cambiantes.',
        cover: '/libro1.png'
    },
    {
        title: 'Transformación Empresarial',
        description: 'Este libro explora los retos y oportunidades que enfrentan las organizaciones en un mundo en constante evolución. Presenta herramientas para innovar, adaptarse y crecer en medio de la disrupción tecnológica y cultural. Propone un enfoque integral que combina estrategia, liderazgo y gestión del cambio. Es ideal para empresarios, gerentes y emprendedores que buscan transformar sus negocios con éxito.',
        cover: '/libro2.png'
    },
    {
        title: 'Comunicación Efectiva',
        description: 'Una guía esencial para mejorar la forma en que nos expresamos y conectamos con los demás. Aborda desde la escucha activa hasta la persuasión, ofreciendo técnicas para transmitir ideas con claridad y confianza. Resalta la importancia de la empatía en el proceso comunicativo. Pensado tanto para el ámbito profesional como personal, ayuda a construir relaciones más sólidas y auténticas.',
        cover: '/libro3.png'
    }
];

function Books() {
    const booksListRef = useRef(null);
    const [animar, setAnimar] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimar(true);
                }
            },
            { threshold: 0.001 } // <-- animación arranca antes
        );
        if (booksListRef.current) {
            observer.observe(booksListRef.current);
        }
        return () => {
            if (booksListRef.current) {
                observer.unobserve(booksListRef.current);
            }
        };
    }, []);

    return (
        <div className="books-section">
            <div className="experience-header">
                <h2>Mis Libros</h2>
            </div>
            <div
                ref={booksListRef}
                className={`books-list${animar ? ' books-list-animar' : ''}`}
            >
                {books.map((book, idx) => (
                    <div className="book-row image-left" key={idx}>
                        <img src={book.cover} alt={book.title} className="book-cover large" />
                        <div className="book-info">
                            <h4>{book.title}</h4>
                            <p>{book.description}</p>
                            <div className="book-buttons">
                                <button className="book-btn" onClick={() => alert('Ver muestra no implementado')}>
                                    Ver muestra
                                </button>
                                <button className="book-btn" onClick={() => alert('Comprar no implementado')}>
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Books;
