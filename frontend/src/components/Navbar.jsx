import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const location = useLocation();

    const handleHomeClick = (e) => {
        // Si ya estamos en Home, hacer scroll al top
        if (location.pathname === '/') {
            e.preventDefault();
            document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
        }
        // Si no estamos en Home, React Router manejará la navegación normalmente
    };

    const handleContactClick = (e) => {
        // Si ya estamos en Home, hacer scroll al componente Contact
        if (location.pathname === '/') {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Si estamos en otra página, navegar a Home y luego hacer scroll
            e.preventDefault();
            window.location.href = '/#contact';
        }
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
                    <li 
                        className="nav-item-dropdown"
                        onMouseEnter={() => setShowSubmenu(true)}
                        onMouseLeave={() => setShowSubmenu(false)}
                    >
                        <Link to="/formacion" className="nav-link">Formación</Link>
                        {showSubmenu && (
                            <div className="nav-submenu">
                                <Link to="/recursos" className="nav-submenu-item">Recursos</Link>
                                <Link to="/cursos" className="nav-submenu-item">Cursos</Link>
                            </div>
                        )}
                    </li>
                    <li><a href="/#contact" className="nav-link" onClick={handleContactClick}>Contacto</a></li>
                </ul>
                
            </div>
        </nav>
    );
}

export default Navbar;
