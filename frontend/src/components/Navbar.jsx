import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/logo.png" alt="Logo" className="nav-logo-img" />
                </Link>
                <ul className="nav-menu">
                    <li><Link to="/" className="nav-link">Inicio</Link></li>
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
