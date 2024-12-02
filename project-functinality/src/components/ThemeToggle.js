import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
}

export default ThemeToggle;
