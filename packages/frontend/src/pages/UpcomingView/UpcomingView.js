import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const UpcomingView = () => {
  return (
    <div className="upcoming-view">
      <PageHeader 
        title="Upcoming" 
        subtitle="Tasks scheduled for the future"
      />
      <div className="empty-state">
        <p>📅 No upcoming tasks</p>
        <p>Your future is clear!</p>
      </div>
    </div>
  );
};

export default UpcomingView;
