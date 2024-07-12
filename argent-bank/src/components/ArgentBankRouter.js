import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sign from './Sign';
import User from './User';
import Footer from './Footer';

function ArgentBankRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        { <Route path='/' element={<Home />} /> }
        { <Route path='/user' element={<User />} /> }
        { <Route path='/sign-in' element={<Sign />} /> }
      </Routes>
      <Footer />
    </Router>
  );
}

export default ArgentBankRouter;