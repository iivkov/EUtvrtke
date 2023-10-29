import React from 'react';

const Accessibility = ({
  increaseFontSize,
  decreaseFontSize,
  resetFontSize,
  toggleGrayscale,
  toggleHighContrast,
  grayscale,
  highContrast,
}) => {
  return (
    <div className='izbornik'>
        <details>
      <summary>INV</summary>
      <div className="inv-buttons">
        <button onClick={increaseFontSize}>Povećaj tekst</button>
        <button onClick={decreaseFontSize}>Smanji tekst</button>
        <button onClick={resetFontSize}>Resetiraj tekst</button>
        <button onClick={toggleGrayscale}>
          {grayscale ? 'Isključi Grayscale' : 'Uključi Grayscale'}
        </button>
        <button onClick={toggleHighContrast}>
          {highContrast ? 'Isključi Kontrast' : 'Uključi Kontrast'}
        </button>
      </div>
    </details>
    </div>
        
  );
};

export default Accessibility;
