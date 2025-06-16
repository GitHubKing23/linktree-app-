<<<<<<< ours
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> theirs
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PublicProfile from './pages/PublicProfile.jsx';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
<<<<<<< ours
=======
          <Route path="/" element={<Navigate to="/login" replace />} />
>>>>>>> theirs
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:username" element={<PublicProfile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
