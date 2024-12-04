import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeApp from './components/Home';
import Aboutme from './components/About';
import Project from './components/projects';
import Contact from './components/Contact';
import Chatbot from './components/chatbot';
import './App.css';
import './nav.css';

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Navigation Panel */}
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">HasHikA.</Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme">About</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>


          </ul>
          
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>

      <div className="nav-spacer"></div>

      {/* Main Content */}
      <div className="content">
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={500} classNames="slide-up">
            <Routes location={location}>
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/" element={<HomeApp />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
