import React, { useEffect } from 'react';
import '../css/taskList.css';

function TaskList({ tasks, setTasks, searchedTask, priorityFilter, activeSection, setActiveSection, onComplete, onEdit, onDelete }) {

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let changed = false;

    const updatedTasks = tasks.map(task => {
      const taskDueDate = new Date(task.dueDate);
      taskDueDate.setHours(0, 0, 0, 0);

      if (taskDueDate < currentDate && task.status === 'upcoming') {
        changed = true;
        return { ...task, status: 'overdue' };
      }
      return task;
    });

    if (changed) { setTasks(updatedTasks); }
  }, [tasks, setTasks]);

  useEffect(() => {
    if (searchedTask !== '') {
      const matchingTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchedTask.toLowerCase())
      );
      if (matchingTasks.length > 0) {
        setActiveSection(matchingTasks[0].status);
      } else {
        setActiveSection('none');
      }
    }
  }, [tasks, searchedTask, setActiveSection]);

  const filteredTasks = tasks.filter(task => {
    const matchedPriority = priorityFilter === 'all' || task.priority === priorityFilter;
    const matchedSection = activeSection === task.status;
    const matchedSearch = searchedTask === '' || task.name.toLowerCase().includes(searchedTask.toLowerCase());

    return matchedPriority && matchedSection && matchedSearch;
  });

  return (
    <div className="task-list">
      {filteredTasks.map((task, index) => (
        <div key={index} className="task-item">
          <h3 className="task-name">{task.name}</h3>
          <p className="task-description">{task.description}</p>
          <p className="task-due-date">Due: {task.dueDate}</p>
          <p className={`task-priority ${task.priority}`}>Priority: {task.priority}</p>
          <div className="task-actions">
            <button onClick={() => onComplete(task.id)}>Complete</button><br />
            <button onClick={() => onEdit(task.id)}>Edit</button><br />
            <button onClick={() => onDelete(task.id)}>Delete</button><br />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
