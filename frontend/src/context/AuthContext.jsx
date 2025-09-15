import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Axios instance with base URL
  const api = axios.create({
    baseURL: "http://localhost:5000/api/auth",
    withCredentials: true,
  });

  // Fetch profile when app loads
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("/profile");
        setUser(data.loggedIn === false ? null : data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  // Register function
  const register = async (formData) => {
    const { data } = await api.post("/register", formData);
    setUser(data);
    return data;
  };

  // Login function
  const login = async (formData) => {
    const { data } = await api.post("/login", formData);
    setUser(data);
    return data;
  };

  // Logout function
  const logout = async () => {
    await api.post("/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for easy usage
export const useAuth = () => useContext(AuthContext);
