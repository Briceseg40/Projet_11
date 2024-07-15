import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Sign from './Sign';
import User from './User';
import UserHeader from './UserHeader';
import Footer from './Footer';

function HeaderWrapper() {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === '/user') {
      return <UserHeader />;
    }
    return <Header />;
  };

  return renderHeader();
}

function ArgentBankRouter() {
  return (
    <Router>
      <HeaderWrapper />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/sign-in' element={<Sign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default ArgentBankRouter;
