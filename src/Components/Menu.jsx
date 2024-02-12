// Menu.js

import React from 'react';
import { Link,useLocation } from 'react-router-dom'; // Use Link for navigation if using React Router
import './Menu.css';

const LeftMenu = ({ children }) => {
  const location = useLocation();
  return (
    <div className="frame">
    <nav>
        <ul>
            <li>
                <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>Home</Link>
            </li>
            <li>
                <Link to="/teachers" className={location.pathname === '/teachers' ? 'selected' : ''}>Teachers</Link>
            </li>
            <li>
                <Link to="/students" className={location.pathname === '/students' ? 'selected' : ''}>Students</Link>
            </li>
            <li>
                <Link to="/chat" className={location.pathname === '/chat' ? 'selected' : ''}>Chat</Link>
            </li>
        </ul>
    </nav>
</div>
  );
};

export default LeftMenu;
