import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserName } from './Api';
import { loginReducer } from '../redux/store/loginSlice';
import './css/main.css';

function AccountPage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const username = useSelector((state) => state.login.username); 
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  const handleEditButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  async function FormChangeName(e) {
    e.preventDefault();
    let credentialsUser = {
      userName: newUsername
    };

    try {
      if (token) {
        await changeUserName(credentialsUser, token); 
        dispatch(loginReducer({ username: newUsername }));
        setIsPopupVisible(false);
      } else {
        alert('Token is missing');
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{username}!</h1>
          <button className="edit-button" onClick={handleEditButtonClick}>Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Changer son Pseudo</h2>
            <form onSubmit={FormChangeName}>
              <input
                type="text"
                id="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <button type="submit">Changer</button>
              <button type="button" onClick={handleClosePopup}>Fermer</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AccountPage;
