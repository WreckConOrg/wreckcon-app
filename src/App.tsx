import React, { useEffect } from 'react';
import './App.css';
import {Home} from './pages/home/home'
import {About} from './pages/about/about'
import { Sponsor } from './pages/sponsor/sponsor';
import { Involved } from './pages/involved/involved';
import { Contact } from './pages/contact/contact';
import { SchedulePage } from './pages/Schedule/schedulePage';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {

  const phrases = [
    "100% organic",
    "the second best convention by Georgia Tech students",
    "coming soon to movie theatres near you",
    "not a construction company",
    "trying really hard we swear",
    "run by students, for students (and everyone else)",
    "for the people",
    "totally, completely free",
    "definitely not a money laundering scheme",
    "funny on twitter @conwreck",
    "nockcerw spelled backwards",
    "one of the convention ever",
    ""
]

const phrase = phrases[Math.floor(Math.random() * phrases.length)]

  return (
    <Routes>
      <Route path='/' element={<Home phraseUsed={phrase} />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/sponsors' element={<Sponsor />}/>
      <Route path='/involved' element={<Involved />}/>
      <Route path='/contact-us' element={<Contact />}/>
      <Route path='/schedule' element={<SchedulePage />}/>
      <Route path='/tickets' Component={() => {
        window.location.href = 'https://gatech.universitytickets.com/w/event.aspx?id=2002&p=1';
        return null;
      }}/>
      <Route path='/discord' Component={() => {
        window.location.href = 'https://discord.com/invite/BY2hTWjz4s';
        return null;
      }}/>
    </Routes>
  );
}

export default App;
