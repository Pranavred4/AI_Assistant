// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import TeacherPage from './TeacherPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teachers" element={<TeacherPage />} />
      </Routes>
    </Router>
  );
};

export default App;
