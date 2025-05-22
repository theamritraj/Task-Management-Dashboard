import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import { SearchProvider } from './context/SearchContext'; // ✅ Import context

function App() {
  return (
    <SearchProvider> {/* ✅ Wrap whole app */}
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
    </SearchProvider>
  );
}

export default App;
