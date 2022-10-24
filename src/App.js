import React from 'react';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import { ThemeProvider } from './ThemeContext';
function App() {

  return (
    <>
      <ThemeProvider>
        <FunctionalComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
