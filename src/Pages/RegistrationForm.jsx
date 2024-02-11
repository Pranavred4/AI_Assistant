// Your registration component

import React, { useState } from 'react';
import firebase from './firebase'; // Import the firebase configuration

import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // The user is registered successfully
      console.log('User registered:', userCredential.user);

      // Clear the form and errors
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (error) {
      // Handle registration errors
      setError(error.message);
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>Confirm Password:</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationForm;
