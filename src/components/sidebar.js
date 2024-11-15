import React, { useState } from 'react';
import '../css/sidebar.css';

function Sidebar({ priorityFilter, setPriorityFilter }) {

    const handleFilterChange = (filter) => {
        setPriorityFilter(filter);
    };

    return (
        <aside className="sidebar">
            <h3 className='filter'>Filter by Priority</h3>
            <div className='priorities'>
                <h3 className={`all ${priorityFilter === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('all')}>All Tasks</h3>
                <h4 className={`high ${priorityFilter === 'high' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('high')}>High</h4>
                <h4 className={`medium ${priorityFilter === 'medium' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('medium')}>Medium</h4>
                <h4 className={`low ${priorityFilter === 'low' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('low')}>Low</h4>
            </div>
        </aside>
    );
}

export default Sidebar;
