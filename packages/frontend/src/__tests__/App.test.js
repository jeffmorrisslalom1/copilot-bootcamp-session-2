import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock all the component modules
jest.mock('../components/Navigation/Navigation', () => {
  return function Navigation() {
    return <div>TODO App Navigation</div>;
  };
});

jest.mock('../components/Layout/Layout', () => {
  return function Layout({ children }) {
    return <div>{children}</div>;
  };
});

jest.mock('../pages/TodayView/TodayView', () => {
  return function TodayView() {
    return <div>Today View</div>;
  };
});

jest.mock('../pages/UpcomingView/UpcomingView', () => {
  return function UpcomingView() {
    return <div>Upcoming</div>;
  };
});

jest.mock('../pages/AllTasksView/AllTasksView', () => {
  return function AllTasksView() {
    return <div>All Tasks</div>;
  };
});

jest.mock('../pages/ListsView/ListsView', () => {
  return function ListsView() {
    return <div>Lists</div>;
  };
});

jest.mock('../pages/SettingsView/SettingsView', () => {
  return function SettingsView() {
    return <div>Settings</div>;
  };
});

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    
    expect(screen.getByText(/TODO App Navigation/i)).toBeInTheDocument();
  });
});


