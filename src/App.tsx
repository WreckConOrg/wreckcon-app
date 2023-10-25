import React from 'react';
import './App.css';
import {Home} from './pages/home/home'
import {About} from './pages/about/about'
import { Sponsor } from './pages/sponsor/sponsor';
import {
  Routes,
  Route,
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
      <Route path='/wreckcon-app' element={<Home phraseUsed={phrase} />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/sponsor-us' element={<Sponsor />}/>
    </Routes>
  );
}

export default App;
