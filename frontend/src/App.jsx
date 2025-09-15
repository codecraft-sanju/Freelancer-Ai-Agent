import LoginSignup from "./pages/LoginSignup";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing"; 
import { useAuth } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <p className="text-center text-gray-300">Loading...</p>;
  return user ? children : <Navigate to="/" replace />; 
};

const App = () => {
  const { user } = useAuth();
  return (
    <Router>
      <Routes>
        {/* Root Landing page */}
        <Route path="/" element={<Landing />} />

        {/* Auth routes */}
        <Route path="/login" element={user ? <Navigate to="/profile" /> : <LoginSignup mode="login" />} />
        <Route path="/signup" element={user ? <Navigate to="/profile" /> : <LoginSignup mode="signup" />} />

        {/* Protected Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Catch-all → root */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
