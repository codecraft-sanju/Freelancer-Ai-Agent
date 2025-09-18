import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Context create
const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all leads for logged-in user
  const fetchLeads = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:5000/api/leads", {
        withCredentials: true, // cookies based auth
      });
      setLeads(data);
    } catch (error) {
      console.error("Error fetching leads:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // Create new lead
  const createLead = async (leadData) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/leads", leadData, {
        withCredentials: true,
      });
      setLeads((prev) => [data, ...prev]); // prepend new lead
    } catch (error) {
      console.error("Error creating lead:", error.response?.data || error.message);
    }
  };

  // Update lead status
  const updateLeadStatus = async (id, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/leads/${id}`,
        { status },
        { withCredentials: true }
      );

      setLeads((prev) =>
        prev.map((lead) => (lead._id === id ? { ...lead, status: data.status } : lead))
      );
    } catch (error) {
      console.error("Error updating lead:", error.response?.data || error.message);
    }
  };

  // Auto fetch on mount
  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <LeadContext.Provider value={{ leads, loading, fetchLeads, createLead, updateLeadStatus }}>
      {children}
    </LeadContext.Provider>
  );
};

// Custom hook
export const useLeads = () => useContext(LeadContext);
