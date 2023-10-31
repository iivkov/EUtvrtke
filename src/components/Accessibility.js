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
    <div className='accessibility-menu'>
        <details>
            <summary>Pristupačnost</summary>
            <i class='fas fa-universal-access' style={{color: "red"}}></i>
            <div className="accessibility-buttons">
                {/* <button onClick={increaseFontSize}>Povećaj tekst</button>
                <button onClick={decreaseFontSize}>Smanji tekst</button> */}
                <button onClick={toggleGrayscale}>
                    {grayscale ? 'Isključi grayscale' : 'Uključi grayscale'}
                </button>
                <button onClick={toggleHighContrast}>
                    {highContrast ? 'Isključi visoki kontrast' : 'Uključi visoki kontrast'}
                </button>
                <button onClick={resetFontSize}>Vrati početne postavke</button>
            </div>
        </details>
    </div>
  );
};

export default Accessibility;
