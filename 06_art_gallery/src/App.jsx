import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageTitle(false);
        break;
      case '/location':
        setPageTitle(true);
        break;
      default:
        setPageTitle(false);
    }
  }, [location.pathname]); // Re-run when the route changes

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>

      <Footer isLight={pageTitle} />
    </>
  );
}

export default App;
