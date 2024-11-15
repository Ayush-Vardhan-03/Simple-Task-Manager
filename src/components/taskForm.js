import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/taskForm.css';

function TaskForm({ addTask, closeForm, editTask, taskData }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');

  useEffect(() => {
    if (taskData) {
        setTaskName(taskData.name);
        setTaskDescription(taskData.description);
        setTaskDueDate(taskData.dueDate);
        setTaskPriority(taskData.priority);
    }
  }, [taskData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskData) {
        editTask({
            ...taskData,
            name: taskName,
            description: taskDescription,
            dueDate: taskDueDate,
            priority: taskPriority
        });
        closeForm();
    } else {
        addTask({
            id: uuidv4(),
            name: taskName,
            description: taskDescription,
            dueDate: taskDueDate,
            priority: taskPriority,
            status: 'upcoming',
        });
    }

    setTaskName('');
    setTaskDescription('');
    setTaskDueDate('');
    setTaskPriority('low');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{taskData === null ? "Add New" : "Edit"} Task</h2>
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
      <button type="submit">{taskData === null ? "Add" : "Done"}</button>
      <button type="submit" onClick={closeForm}>Close</button>
    </form>
  );
}

export default TaskForm;
