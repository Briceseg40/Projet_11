import React, { useState } from 'react'
import { loginReducer } from '../redux/store/loginSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './css/main.css';

async function loginUser(credentials) {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  if (response.ok) {
    const result = await response.json()
    return result.body.token
  } else {
    throw new Error('Email ou mot de passe incorrect.')
  }
}

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    let credentials = {
      email: email,
      password: password
    }

    try {
      let token = await loginUser(credentials)
      dispatch(loginReducer({token: token}))
      navigate('/user')
    }
    catch(error) {
      alert(error)
    }

  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
