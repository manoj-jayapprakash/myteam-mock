import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="font-livvic bg-primary-green min-h-screen text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
