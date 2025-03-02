import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = ({ isDarkMode, toggleTheme }) => {
    return (
        <header>
            <h1>TaskTwirler</h1>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </header>
    );
};

export default Header;