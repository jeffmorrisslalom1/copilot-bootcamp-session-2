import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const ListsView = () => {
  return (
    <div className="lists-view">
      <PageHeader 
        title="Lists" 
        subtitle="Organize your tasks into lists"
      />
      <div className="empty-state">
        <p>📋 No lists yet</p>
        <p>Create a list to get organized!</p>
      </div>
    </div>
  );
};

export default ListsView;
