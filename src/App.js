import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]); 
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;