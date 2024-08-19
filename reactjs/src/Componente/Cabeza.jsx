import React from 'react';
import logo from '../images/logo.jpg';
import '../App.css';

function Cabeza() {
    return (
        <header className="header">
            <div className="logo">
                <img src= {logo} alt="logo" />
            </div>
            <nav className="nav">
            <div className="buscador">
                <input type="text" placeholder="   Buscar"/>
            </div>
                <ul>
                    <li><a href="#">Quiénes Somos</a></li>
                    <li><a href="#">Dónde Viajar</a></li>
                    <li><a href="#">Dónde Quedarse</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Cabeza;