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

  const handleClickAbout = () => {
    navigate('/aboutme');
  };

  const handleClickProjects = () => {
    navigate('/project');
  };

  const handleClickContact = () => {
    navigate('/contact');
  };

  return (
    
    <div>
            <div>
        <h1 className="h1-1">
          <span>Hashika</span>
          <span>Chathubhashaka</span>
        </h1>
        <h3 className='h3-1'>Electronic & Robotic Developer</h3>
      </div>


<div>

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <a 
        aria-label="0b0011" 
        className="h-button" 
        data-text="About"
        onClick={handleClickAbout}
        style={{ cursor: 'pointer' }} // Optional to show pointer on hover
      >

        <span>M</span>
        <span> </span>
        <span>E</span>
        {/* <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>1</span> */}
    </a>
    
    <a aria-label='0b1010' class='h-button' data-text='Projects'  onClick={handleClickProjects} style={{ cursor: 'pointer' }}>

        <span>H</span>
        <span> </span>   
        <span>U</span>
        <span> </span> 
        <span>B</span>
        <span> </span> 

        {/* <span>0</span>
        <span>b</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>0</span> */}
    </a>


    <a aria-label='0b0101' class='h-button' data-text='Chatbot'  style={{ cursor: 'pointer' }} >
        <span>0</span>
        <span>b</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
    </a>

    <a aria-label='0b0010' class='h-button' data-text='Contact'  onClick={handleClickContact} style={{ cursor: 'pointer' }} >

        <span>M</span>
        <span> </span>
        <span>E</span>       
        
        
        {/* <span>0</span>
        <span>b</span>
        <span>0</span>
        <span>0</span>
        <span>1</span>
        <span>0</span> */}
    </a>


</div>


</div>
  
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>      

      {/* <div style={{ textAlign: 'center', padding: '20px' }}>

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
      </div> */}
      
    </div>
    </div>
  );
}

export default Home;
