import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      <span className="material-icons">
        {isDarkMode ? 'brightness_7' : 'brightness_4'}
      </span>
    </button>
  );
};

export default ThemeToggle;
