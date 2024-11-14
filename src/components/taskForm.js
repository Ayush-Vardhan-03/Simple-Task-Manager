import React, { useState } from 'react';

function TaskForm({ addTask, closeForm }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
      priority: taskPriority,
      status: 'upcoming',
    });
    setTaskName('');
    setTaskDescription('');
    setTaskDueDate('');
    setTaskPriority('low');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Add New Task</h2>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </label>
      <label>
        Task Description:
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Task Due Date:
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
          required
        />
      </label>
      <label>
        Task Priority:
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
          required
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </label>
      <button type="submit">Add Task</button>
      <button type="submit" onClick={closeForm}>Exit</button>
    </form>
  );
}

export default TaskForm;
