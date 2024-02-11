
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import the main component of your app
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
const root = document.getElementById('root');

// Use createRoot to render the app
const reactRoot = createRoot(root);
reactRoot.render(
  <Router>
     <AuthProvider>
    <App />
    </AuthProvider>
  </Router>
);