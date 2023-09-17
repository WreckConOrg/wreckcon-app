import React from 'react';
import './App.css';
import {Home} from './components/home'
import {About} from './components/about'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const phrases = [
    "100% organic.",
    "the second best convention by Georgia Tech students.",
    "coming to movie theatres near YOU.",
    "NOT a construction company.",
    "trying really hard we swear.",
    "run by students, for students (and everyone else).",
    "for the people.",
    "totally, completely free.",
    "definitely NOT a money laundering scheme.",
    "funny on twitter @conwreck."
]

const phrase = phrases[Math.floor(Math.random() * phrases.length)]

  return (
    <Routes>
      <Route path='/wreckcon-app' element={<Home phraseUsed={phrase} />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  );
}

export default App;
