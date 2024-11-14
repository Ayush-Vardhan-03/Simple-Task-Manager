import React from 'react';

function Sidebar({ setPriorityFilter }) {

    const handlePriority = (priority) => {
        setPriorityFilter(priority);
    };

  return (
    <aside className="sidebar">
      <h3 className="all" onClick={() => handlePriority('all')}>All Tasks</h3>
      <h3 className='filter'>Filter by Priority</h3>
      <div className='priorities'>
        <h4 className='high' onClick={() => handlePriority('high')}>High</h4>
        <h4 className='medium' onClick={() => handlePriority('medium')}>Medium</h4>
        <h4 className='low' onClick={() => handlePriority('low')}>Low</h4>
      </div>
    </aside>
  );
}

export default Sidebar;
