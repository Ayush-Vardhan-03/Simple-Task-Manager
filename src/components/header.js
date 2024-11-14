import React from 'react';
import Navbar from './navbar.js';
import Sidebar from './sidebar.js'

function Header() {
  return (
    <header>
      <h1>Simple Task Manager</h1>
      <Navbar />
      <Sidebar />
    </header>
  );
}

export default Header;
