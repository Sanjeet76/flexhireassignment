
import React from 'react';
import './App.css';

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProfilePage from './pages/profile';
import JobsPage from './pages/jobs';

import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Link to="/profile">My Profile</Link>
          <Link to="/jobs">Job Applications</Link>
          
        </Navbar>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobsPage />} />
         
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;