// src/App.tsx

import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import FeedBack from './pages/feedback';
import Certificate from './pages/certificate';

const tele = window.Telegram?.WebApp;

function App() {
  useEffect(() => {
    // Ensure the Telegram object is available before calling ready()
    if (tele) {
      tele.ready();
    }
  }, []); // Empty dependency array to run only once

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for the home page */}
          {/* You can add more routes here in the future */}
          <Route path="/feedback" element={<FeedBack />} /> 
          <Route path="/certificate" element={<Certificate />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
