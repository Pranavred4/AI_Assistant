import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import './LoginPage.css';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const LoginPage = () => {
 

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      // You can handle successful login here, e.g., redirect to another page
      console.log('User logged in:', response.user);
      login();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="error-message">{error}</p>}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
