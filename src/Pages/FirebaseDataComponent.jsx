import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app'; // Updated import statement
import 'firebase/compat/database'; // Updated import statement

const FirebaseDataComponent = () => {
  // Replace the Firebase config with your own configuration
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

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = firebase.database().ref("teachers");

    // Fetch data from Firebase Realtime Database
    usersRef.once("value").then((snapshot) => {
      const userList = [];
      snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        userList.push(user);
      });
      setUsers(userList);
    });
  }, []);

  return (
    <div>
      <h1>Teachers List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Email: {user.email}, Name: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirebaseDataComponent;
