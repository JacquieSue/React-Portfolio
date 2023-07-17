import React from 'react';

import './App.css';
import Display from './components/Display'
import Alert from './components/Alert';
import Nav from './components/Nav';

import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact'

const message = 'Invalid user id or password';
const alertType = "danger"

export default function App() {
  return (
    <Alert type={alertType} message={message} />,
   <div>
    <Nav />
    <AboutMe />
    <Resume />
    <Portfolio />
    {/* <Contact /> */}
   </div>
  );
}

