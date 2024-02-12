import React, { useEffect, useState } from 'react';

import firebase from 'firebase/compat/app'; // Updated import statement
import 'firebase/compat/database'; // Updated import statement

import firebaseConfig from '../firebaseConfig';

const FirebaseDataComponent = () => {
  // Replace the Firebase config with your own configuration


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
