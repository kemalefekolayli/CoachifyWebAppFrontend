import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProgramPage from './ProgramPage'; // Your current main page
import LoginPage from './LoginPage';



function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav>
          <Link to="/login">Home</Link> | <Link to="/create">Create Program</Link>
        </nav>
        <hr />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<ProgramPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
