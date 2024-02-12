// TeacherPage.jsx

import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app'; // Updated import statement
import 'firebase/compat/database'; // Updated import statement

import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const TeacherPage = () => {
  
  console.log('TeacherPage rendered');
  

  return (
    <div>
    <h1 className="center-text">Teachers</h1>
    
  </div>
);

};
export default TeacherPage;
