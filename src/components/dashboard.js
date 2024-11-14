import React, { useState } from 'react';
import Header from './header';
import Navbar from './navbar';
import Sidebar from './sidebar';
import TaskList from './taskList';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('upcoming');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="dashboard">
      <Header />
      <Sidebar setPriorityFilter={setPriorityFilter} />
      <Navbar addTask={addTask} setActiveSection={setActiveSection} />
      <section className="content">
        <TaskList tasks={tasks} priorityFilter={priorityFilter} activeSection={activeSection} />
      </section>
    </div>
  );
}

export default Dashboard;
