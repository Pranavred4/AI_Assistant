// Menu.js

import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation if using React Router
import './Menu.css';

const LeftMenu = ({ children }) => {
  return (
    <div className="frame">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftMenu;
