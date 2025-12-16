import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Layout from './components/Layout/Layout';
import TodayView from './pages/TodayView/TodayView';
import UpcomingView from './pages/UpcomingView/UpcomingView';
import AllTasksView from './pages/AllTasksView/AllTasksView';
import ListsView from './pages/ListsView/ListsView';
import SettingsView from './pages/SettingsView/SettingsView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/today" replace />} />
            <Route path="/today" element={<TodayView />} />
            <Route path="/upcoming" element={<UpcomingView />} />
            <Route path="/all-tasks" element={<AllTasksView />} />
            <Route path="/lists" element={<ListsView />} />
            <Route path="/settings" element={<SettingsView />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;