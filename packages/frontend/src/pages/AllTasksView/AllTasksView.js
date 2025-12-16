import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const AllTasksView = () => {
  return (
    <div className="all-tasks-view">
      <PageHeader 
        title="All Tasks" 
        subtitle="View and manage all your tasks"
      />
      <div className="empty-state">
        <p>📝 No tasks yet</p>
        <p>Start by creating your first task!</p>
      </div>
    </div>
  );
};

export default AllTasksView;
