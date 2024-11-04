// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeApp from './Home';
import PageX from './PageX';
import Project from './project';
import './App.css';  // Include the CSS for transitions here

function App() {
  const location = useLocation();

  return (
    <div>
      <div>
        <h1>
        <span>Hashika</span>
        <span>Chathubhashaka</span>
           </h1>

        <h3 > Electronic & Robotic Developer</h3>


      </div>

      
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="slide-up"
      >
        <Routes location={location}>
          <Route path="/page-x" element={<PageX />} />
          <Route path="/project" element={<Project />} />
        </Routes>



      </CSSTransition>
    </TransitionGroup>

    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="slide-down"
      >
        <Routes location={location}>
          <Route path="/" element={<HomeApp />} />
        </Routes>

      </CSSTransition>
    </TransitionGroup>

    </div>
  );
}

export default App;
