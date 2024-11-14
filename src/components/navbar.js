import React, { useState } from 'react';
import TaskForm from './taskForm';

function Navbar({ addTask, setActiveSection }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section);
  };
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <nav className="navbar">
        <div className="sections">
          <h3 className="upcoming" onClick={() => handleClick('upcoming')}>Upcoming tasks</h3>
          <h3 className="overdue" onClick={() => handleClick('overdue')}>Overdue tasks</h3>
          <h3 className="completed" onClick={() => handleClick('completed')}>Completed tasks</h3>
        </div>
        <button onClick={handleToggleForm}>Add New Task</button>
      </nav>
      {showForm && <TaskForm addTask={addTask} closeForm={handleToggleForm}/>}
    </>
  );
}

export default Navbar;
