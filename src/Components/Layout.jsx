// Layout.jsx

import React from 'react';
import Menu from './Menu';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
