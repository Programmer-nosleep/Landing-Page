import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.tsx';
import Feature from '../pages/Feature.tsx';
import About from '../pages/About.tsx';
import Contact from '../pages/Contact.tsx';
import Faq from '../pages/Faq.tsx';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </Router>
  );
}
