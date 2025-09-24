import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const handleHomeClick = (e) => {
        // Si ya estamos en Home, hacer scroll al top
        if (location.pathname === '/') {
            e.preventDefault();
            document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
        }
        // Si no estamos en Home, React Router manejará la navegación normalmente
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={handleHomeClick}>
                    <img src="/logo.png" alt="Logo" className="nav-logo-img" />
                </Link>
                <ul className="nav-menu">
                    <li><Link to="/" className="nav-link" onClick={handleHomeClick}>Inicio</Link></li>
                    <li><Link to="/about" className="nav-link">Sobre Mi</Link></li>
                    <li><Link to="/services" className="nav-link">Servicios</Link></li>
                    <li><Link to="/courses" className="nav-link">Cursos</Link></li>
                    <li><Link to="/contact" className="nav-link">Contacto</Link></li>
                </ul>
                
            </div>
        </nav>
    );
}

export default Navbar;
