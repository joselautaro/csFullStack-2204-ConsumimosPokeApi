import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const NavBar = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link className="link" to="/" >Inicio</Link>
                    <Link className="link" to="/primer">Primer</Link>
                    <Link className="link" to="/segundo">Segundo</Link>
                </nav>
            </header>
        </div>
    )
}
