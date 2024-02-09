import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import { useNavigate } from 'react-router-dom';




const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: "AIzaSyAs-ShCabBEb4vPRP2fe7SlTmOH7AXe3Ok",
        authDomain: "ai-assistant-vt.firebaseapp.com",
        databaseURL: "https://ai-assistant-vt-default-rtdb.firebaseio.com",
        projectId: "ai-assistant-vt",
        storageBucket: "ai-assistant-vt.appspot.com",
        messagingSenderId: "1084653112638",
        appId: "1:1084653112638:web:005a92088c5140665f306f",
        measurementId: "G-6S59XEZZRJ"
      };

      firebase.initializeApp(firebaseConfig);
    }
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleLogin = async () => {
    try {
      // Check if the email exists in the teachers node of the Realtime Database
      const teachersSnapshot = await firebase.database().ref('teachers').orderByChild('email').equalTo(email).once('value');
      const teacherData = teachersSnapshot.val();

      if (teacherData) {
        console.log('Teacher data:', teacherData);
        // Redirect to teacher page
        alert('Redirecting to Teacher Page...');
        navigate('./teachers');

      } else {
        // Handle user not found or invalid user type
        alert('Invalid user type or user not found');
      }
    } catch (error) {
      // Handle errors
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
