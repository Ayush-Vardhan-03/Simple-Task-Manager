import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import TaskList from './taskList';
import TaskForm from './taskForm';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('upcoming');
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchedTask, setSearchedTask] = useState('');

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: 'completed' } : task));
  };

  const handleEdit = (taskId) => {
    const editTask = tasks.find(task => task.id === taskId);
    setTaskToEdit(editTask);
    setShowForm(true);
  };

  const handleEditTask = (task) => {
    setTasks(tasks.map(t => t.id === task.id ? task : t));
    setShowForm(false);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks.length > 0) {
      console.log('Retrieved tasks from localStorage:', storedTasks);
      setTasks(storedTasks);
    } else {
      console.log('No tasks found in localStorage.');
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      console.log('Saving tasks to localStorage:', tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="dashboard">
      <Sidebar
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <Navbar
        activeSection={activeSection}
        search={searchedTask}
        setActiveSection={setActiveSection}
        setSearch={setSearchedTask}
        setShowForm={setShowForm}
      />
      <section className="content">
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          searchedTask={searchedTask}
          priorityFilter={priorityFilter}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onComplete={handleComplete}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </section>
      {showForm && <TaskForm
        addTask={handleAddTask}
        closeForm={handleCloseForm}
        editTask={handleEditTask}
        taskData={taskToEdit}
      />}
    </div>
  );
}

export default Dashboard;
