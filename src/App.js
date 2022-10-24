import React, { useState } from 'react';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
export const ThemeContext = React.createContext()
function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme() {
    setDarkTheme(currentTheme => !currentTheme)
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionalComponent />
    </ThemeContext.Provider>
  );
}

export default App;
