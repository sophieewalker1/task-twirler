// components/Header/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = ({ isDarkMode, toggleTheme, isLoggedIn, onLogout }) => {
    return (
        <header>
            <div className="logo-container">
                <Link to="/" className="logo">Your App</Link>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
                    {isLoggedIn ? (
                        <>
                            <li><NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
                            <li><button className="nav-button" onClick={onLogout}>Logout</button></li>
                        </>
                    ) : (
                        <li><NavLink to="/login" className={({isActive}) => isActive ? 'active' : ''}>Login</NavLink></li>
                    )}
                </ul>
            </nav>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </header>
    );
};

export default Header;