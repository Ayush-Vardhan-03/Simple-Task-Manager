import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Filter by Priority</h3>
      <ul>
        <li>All</li>
        <li>High</li>
        <li>Medium</li>
        <li>Low</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
