import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const TodayView = () => {
  return (
    <div className="today-view">
      <PageHeader 
        title="Today" 
        subtitle={new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      />
      <div className="empty-state">
        <p>🎉 No tasks for today!</p>
        <p>Enjoy your day or add your first task.</p>
      </div>
    </div>
  );
};

export default TodayView;
