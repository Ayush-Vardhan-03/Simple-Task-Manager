import React from 'react';
import '../css/navbar.css';

function Navbar({ activeSection, search, setActiveSection, setSearch, setShowForm }) {

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <nav className="navbar">
        <div className="sections">
          <h3 className={`upcoming ${activeSection === 'upcoming' ? 'active' : ''}`}
            onClick={() => handleClick('upcoming')}>Upcoming tasks</h3>
          <h3 className={`overdue ${activeSection === 'overdue' ? 'active' : ''}`}
            onClick={() => handleClick('overdue')}>Overdue tasks</h3>
          <h3 className={`completed ${activeSection === 'completed' ? 'active' : ''}`}
            onClick={() => handleClick('completed')}>Completed tasks</h3>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setShowForm(true)}>Add New Task</button>
      </nav>
    </>
  );
}

export default Navbar;
