import React, { useEffect } from "react";
import "./App.css";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Sponsor } from "./pages/sponsor/sponsor";
import { Involved } from "./pages/involved/involved";
import { Contact } from "./pages/contact/contact";
import { SchedulePage } from "./pages/Schedule/schedulePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { EventsPage } from "./pages/events/EventsPage";
import { GuestsPage } from "./pages/guests/GuestsPage";
import { ArtistsPage } from "./pages/artists/ArtistsPage";
import { EventInfoPage } from "./pages/eventInfo/EventInfoPage";
import { PrettyDerbyPage } from "./pages/prettyDerby/PrettyDerbyPage";

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
    "funny on twitter @conwreck",
    "nockcerw spelled backwards",
    "one of the conventions ever",
    "back and better than ever",
  ];

  const phrase = phrases[Math.floor(Math.random() * phrases.length)];

  return (
    <Routes>
      <Route path="/" element={<Home phraseUsed={phrase} />} />
      <Route path="/about" element={<About />} />
      <Route path="/sponsors" element={<Sponsor />} />
      <Route path="/involved" element={<Involved />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/guests" element={<GuestsPage />} />
      <Route path="/artists" element={<ArtistsPage />} />
      <Route path="/info" element={<EventInfoPage />} />
      <Route path="/pretty-derby" element={<PrettyDerbyPage />} />

      <Route
        path="/tickets"
        Component={() => {
          window.location.href =
            "https://gatech.universitytickets.com/w/event.aspx?id=2099";
          return null;
        }}
      />
      <Route
        path="/discord"
        Component={() => {
          window.location.href = "https://discord.com/invite/BY2hTWjz4s";
          return null;
        }}
      />
    </Routes>
  );
}

export default App;
