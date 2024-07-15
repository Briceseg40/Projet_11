import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginReducer } from '../redux/store/loginSlice';
import Logo from './img/argentBankLogo.png';
import './css/main.css';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function LogoutButton() {
      dispatch(loginReducer({token: null}))
      navigate('/')
  }
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="/">
        <img
          class="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="#">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <a class="main-nav-item" href="/" onClick={LogoutButton}>
          <i class="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
  );
}

export default Header;
