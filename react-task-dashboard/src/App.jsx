import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Pages/Dashboard';
import Tasks from './Components/Pages/Tasks';
import Settings from './Components/Pages/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '230px', marginTop: '70px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
