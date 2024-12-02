import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="logo">My Portfolio</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;