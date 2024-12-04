import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeApp from './components/Home';
import Aboutme from './components/About';
import Project from './components/projects';
import Contact from './components/Contact';
import Chatbot from './components/chatbot';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Home Button - Only shows if not on the home page */}
      {location.pathname !== "/" && (
        <div className="home-button">
          <Link to="/" className="home-link">Home</Link>
        </div>
      )}

      {/* Social Media Icons */}
      <div className="social-buttons">
        <a href="#" className="social-button social-button--linkedin" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/HashikaChathubhashaka" className="social-button social-button--github" aria-label="GitHub" target='_blank' rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="social-button social-button--mail" aria-label="Mail">
          <i className="fa fa-envelope"></i>
        </a>
      </div>




      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames="slide-up"
        >
          <Routes location={location}>
            <Route path="/aboutme" element={<Aboutme/>} />
            <Route path="/project" element={< Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<Chatbot />} />
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
