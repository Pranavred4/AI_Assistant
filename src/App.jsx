
import {  Routes, Route ,Navigate} from 'react-router-dom';
import React, { useState } from 'react';
import Layout from './Components/Layout.jsx'
import HomePage from "./Pages/HomePage";
import ChatBox from "./Components/ChatBox.jsx";
import TeacherPage from "./Pages/TeacherPage";
import StudentPage from "./Pages/StudentPage.jsx";
import EditorPage from "./Pages/EditorPage";
import LoginPage from './Pages/LoginPage.jsx'
import { useAuth } from './AuthContext';

  const App = () => {
   
    const { isLoggedIn } = useAuth();
   

    const handleLogin = () => {
      // Implement your login logic here
      setLoggedIn(true);
    };
  
    const handleLogout = () => {
      // Implement your logout logic here
      setLoggedIn(false);
    };

    return (

      
    <div>
      <Routes>
      <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <LoginPage/>
            )
          }
        />
      <Route
          path="/*"
          element={(
            isLoggedIn ? (
            <Layout>
              <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/teachers" element={<TeacherPage />} />
                 <Route path="/students" element={<StudentPage />} />
                 <Route path="/chat" element={<ChatBox />} />
                 <Route path="/editor" element={<EditorPage />} />
              </Routes>
            </Layout>
            ) :  (
              <Navigate to="/login" />
            )
          )}
        />
      </Routes>
    </div>
    );
  };
  
  export default App;

