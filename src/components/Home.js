// BinaryButtonApp.js
import React, { useState } from 'react';

import './Home.css'
import './Home.scss'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [buttons, setButtons] = useState([0, 0, 0, 0]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const toggleButton = (index) => {
    const newButtons = [...buttons];
    newButtons[index] = newButtons[index] === 0 ? 1 : 0;
    setButtons(newButtons);
  };

  const calculateBinaryValue = () => {
    return buttons.reduce((acc, value, i) => acc + value * Math.pow(2, i), 0);
  };

  const handleBigButtonClick = () => {
    const binaryValue = calculateBinaryValue();
    if (binaryValue === 12) {
      navigate('/aboutme');
    }
    else if (binaryValue === 5) {
      navigate('/project');
    }
    else if (binaryValue === 4) {
      navigate('/contact');
    }
    else if (binaryValue === 10) {
      navigate('/chatbot');
    }
  

    else {

      setMessage( 'Invalid Code');
    }
  };

  return (
    
    <div>
            <div>
        <h1>
          <span>Hashika</span>
          <span>Chathubhashaka</span>
        </h1>
        <h3>Electronic & Robotic Developer</h3>
      </div>


<div>

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
    <a aria-label='0b0011' class='h-button' data-text='About Me'>
        <span>0</span>
        <span>b</span>
        <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>1</span>
    </a>
    
    <a aria-label='0b1010' class='h-button' data-text='Projects'>
        <span>0</span>
        <span>b</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
    </a>

    <a aria-label='0b0010' class='h-button' data-text='Contact'>
        <span>0</span>
        <span>b</span>
        <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
    </a>

    <a aria-label='0b0101' class='h-button' data-text='Chatbot'>
        <span>0</span>
        <span>b</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
    </a>
</div>


</div>
  
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>      
      <div style={{ textAlign: 'center', padding: '20px' }}>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {buttons.map((value, index) => (
            <label key={index} className="rocker rocker-small">
              <input
                type="checkbox"
                checked={value === 1}
                onChange={() => toggleButton(index)}
                style={{ display: 'none' }}
              />
              <span className="switch-left non-selectable">1</span> 
              <span className="switch-right non-selectable">0</span>
            </label>
          ))}
        </div>
        <button className='button-59'
          onClick={handleBigButtonClick}
          style={{ marginTop: '20px', padding: '15px' }}
        >
          Lets Go 
        </button>
        <h2 className="h2-1">{message}</h2>
      </div>
    </div>
    </div>
  );
}

export default Home;
