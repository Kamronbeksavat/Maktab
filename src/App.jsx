
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegionDetail from './pages/RegionDetail';
import SplashPage from './pages/SplashPage';
import React, { useState, useEffect } from 'react';
import { regions } from './data/regionsData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage regions={regions} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        <Route path="/" element={<SplashPage />} />
        <Route path="/region/:id" element={<RegionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;