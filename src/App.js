import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeComponent from "./components/HomeComponent";
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import Accessibility from './components/Accessibility';

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    if (fontSize * 1.15 <= 96) {
      setFontSize(prevFontSize => prevFontSize * 1.15);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize * 0.9 >= 16) {
      setFontSize(prevFontSize => prevFontSize * 0.9);
    }
  };

  const resetFontSize = () => {
    setFontSize(16);
    setGrayscale(false);
    setHighContrast(false);
  };

  const toggleGrayscale = () => {
    setGrayscale(prevGrayscale => !prevGrayscale);
  };

  const toggleHighContrast = () => {
    setHighContrast(prevHighContrast => !prevHighContrast);
  };

  return (
    <div className={`App ${grayscale ? 'grayscale' : ''} ${highContrast ? 'high-contrast' : ''}`}>
    {/* < > */}
      <BrowserRouter>
        <Navbar />
        <Accessibility
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        resetFontSize={resetFontSize}
        toggleGrayscale={toggleGrayscale}
        toggleHighContrast={toggleHighContrast}
        grayscale={grayscale}
        highContrast={highContrast}
      />
        <Routes>
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/o-nama" element={<AboutComponent />} />
          <Route path="/djelatnosti" element={<HomeComponent />} />
          <Route path="/projekti" element={<HomeComponent />} />
          <Route path="/kontakt" element={<ContactComponent />} />
        </Routes>
        <Footer/>
		  </BrowserRouter>
    </div>
    // {/* </> */}
  );
}

export default App;
