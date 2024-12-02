import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <ThemeToggle />
        <Home />
        <Portfolio />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;