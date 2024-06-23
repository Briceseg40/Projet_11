import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sign from './Sign';
import Footer from './Footer';

function KasaRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        { <Route path='/' element={<Home />} /> }
        { <Route path='/sign-in' element={<Sign />} /> }
      </Routes>
      <Footer />
    </Router>
  );
}

export default KasaRouter;