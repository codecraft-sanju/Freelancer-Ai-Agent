import { useState } from "react";
import { useLeads } from "../context/LeadContext";
import { motion } from "framer-motion";

function LeadForm() {
  const { createLead } = useLeads();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    niche: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return alert("Name is required!");
    setLoading(true);
    await createLead(formData);
    setFormData({ name: "", company: "", email: "", phone: "", niche: "" });
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-md"
    >
      <h3 className="text-xl font-semibold mb-4 text-indigo-400">➕ Add New Lead</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {["name","company","email","phone","niche"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              {field.charAt(0).toUpperCase() + field.slice(1)}
              {field === "name" && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className="w-full rounded-lg border border-gray-600 px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
              required={field === "name"}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Lead"}
        </button>
      </form>
    </motion.div>
  );
}

export default LeadForm;
