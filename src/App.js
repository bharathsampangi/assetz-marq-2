import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  const scrollTo = (to) => {
    const section = document.querySelector(`#${to}`);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navigation scrollTo={scrollTo} />
            <Home scrollTo={scrollTo} /> 
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;