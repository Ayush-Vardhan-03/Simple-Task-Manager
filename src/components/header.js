import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar'


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
