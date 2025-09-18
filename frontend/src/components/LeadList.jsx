import { useLeads } from "../context/LeadContext";
import LeadForm from "./LeadForm";
import { motion } from "framer-motion";

function LeadList() {
  const { leads, loading, updateLeadStatus } = useLeads();

  if (loading)
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-gray-400 animate-pulse">Loading leads...</p>
      </div>
    );

  const statusColors = {
    "new": "bg-gray-700 text-gray-300",
    "contacted": "bg-blue-800 text-blue-300",
    "in-progress": "bg-yellow-800 text-yellow-300",
    "closed": "bg-green-800 text-green-300",
    "lost": "bg-red-800 text-red-300",
  };

  return (
    <div className="space-y-6">
      <LeadForm />

      {leads.length === 0 ? (
        <p className="text-gray-400 italic">No leads found.</p>
      ) : (
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {leads.map((lead) => (
            <motion.div
              key={lead._id}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 border border-gray-700 p-4 rounded-2xl shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-100">{lead.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[lead.status]}`}>
                  {lead.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm"><strong>Company:</strong> {lead.company || "—"}</p>
              <p className="text-gray-400 text-sm"><strong>Email:</strong> {lead.email || "—"}</p>
              <p className="text-gray-400 text-sm"><strong>Phone:</strong> {lead.phone || "—"}</p>
              <p className="text-gray-400 text-sm"><strong>Niche:</strong> {lead.niche || "—"}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => updateLeadStatus(lead._id, "contacted")}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition"
                >
                  Mark Contacted
                </button>
                <button
                  onClick={() => updateLeadStatus(lead._id, "in-progress")}
                  className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm transition"
                >
                  In Progress
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default LeadList;
