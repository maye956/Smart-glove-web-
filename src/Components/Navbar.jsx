import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom'; 


function Navbar() {
    const [nav, setNav] = useState(false);

    
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/caracteristicas">Características</Link></li>
                <li><Link to="/Entrenadores">Entrenadores</Link></li>
                <li><Link to="/boxeadores">Boxeadores</Link></li>
                <li><Link to="/acercade">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/registro">Registro</Link></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;