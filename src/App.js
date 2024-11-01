import React, { useState } from 'react';
import './App.css';

function BinaryButtonApp() {
  // State to store each button's on/off (0/1) state
  const [buttons, setButtons] = useState([0, 0, 0, 0]);
  const [message, setMessage] = useState('');

  // Toggle button state by index (0 becomes 1 and 1 becomes 0)
  const toggleButton = (index) => {
    const newButtons = [...buttons];
    newButtons[index] = newButtons[index] === 0 ? 1 : 0;
    setButtons(newButtons);
  };

  // Calculate binary value based on button states (using weights 1, 2, 4, 8)
  const calculateBinaryValue = () => {
    const binaryValue = buttons.reduce(
      (acc, value, i) => acc + value * Math.pow(2, i), 0
    );
    return binaryValue;
  };

  // Handle big button click
  const handleBigButtonClick = () => {
    const binaryValue = calculateBinaryValue();
    // Define messages for specific binary values
    const messages = {
      1: 'about me',
      5: 'my projects',
      8: 'chat with me',
    };
    setMessage(messages[binaryValue] || `No valid`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {buttons.map((value, index) => (
            <label key={index} className="rocker rocker-small">
              <input
                type="checkbox"
                checked={value === 1}
                onChange={() => toggleButton(index)}
                style={{ display: 'none' }} // Hide the default checkbox
              />

              
              <span className="switch-left non-selectable" > 1</span> 
              <span className="switch-right non-selectable">0</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleBigButtonClick}
          style={{ marginTop: '20px', padding: '15px', fontSize: '16px' }}
        >
          Check Value
        </button>
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default BinaryButtonApp;
