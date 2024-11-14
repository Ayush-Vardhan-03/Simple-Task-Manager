import React from 'react';

function TaskList({ tasks, priorityFilter, activeSection, onComplete, onEdit, onDelete }) {
  const filteredTasks = tasks.filter(task => {
    if (task.status === activeSection) {
      if (priorityFilter === 'all') {
        return true;
      } else {
        return task.priority === priorityFilter;
      }
    }
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
