// BinaryButtonApp.js
import React, { useState } from 'react';

import './Home.css'
import './Home.scss'
import './animatedfont.css'
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


  const handleClickChatbot = () => {
    navigate('/chatbot');
  };

  return (
    
    <div className='background'>
      
            <div>
        <h1 className="h1-0">
          <span>Ha<h3 class="animate-charcter-0"> SHI</h3>ka</span>
          </h1>





          <h1 className="h1-1">
          <span>C<h3 class="animate-charcter-1"> HA</h3>thubhasha<h3 class="animate-charcter-1">KA</h3></span>
        </h1>
        <h3 className='h3-1'>Electronic & Robotic Developer</h3>
      </div>


<div>

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <a 
        aria-label="Me" 
        className="h-button" 
        data-text="About"
        onClick={handleClickAbout}
        style={{ cursor: 'pointer' }} // Optional to show pointer on hover
      >

        <span>M</span>
        <span> </span>
        <span>E</span>
    </a>
    
    <a aria-label='Hub' class='h-button' data-text='Projects'  onClick={handleClickProjects} style={{ cursor: 'pointer' }}>

        <span>H</span>
        <span> </span>   
        <span>U</span>
        <span> </span> 
        <span>B</span>
        <span> </span> 
    </a>


    <a aria-label='Bot' class='h-button' data-text='Chat' onClick={handleClickChatbot}  style={{ cursor: 'pointer' }} >
        <span>B</span>
        <span> </span>
        <span>O</span>
        <span> </span>
        <span>T</span>

    </a>

    <a aria-label='Me' class='h-button' data-text='Contact'  onClick={handleClickContact} style={{ cursor: 'pointer' }} >

        <span>M</span>
        <span> </span>
        <span>E</span>       

    </a>


</div>


</div>
  
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3vh' }}>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ maxWidth: '900px', textAlign: 'center', padding: '2px' }}>
    <h2 className='h3-2'>
      Embedded Systems | Robotics | Machine Learning
    </h2>
  </div>
</div>

<div style={{ marginTop: '65px' }}>
      <a className='a1' href="#" style={{ textAlign: 'center' }}>My Resume</a>
    </div>
  </div>







    </div>

    
  );
}

export default Home;
