import Lead from "../models/Lead.js";

// @desc Create a new Lead
// @route POST /api/leads
// @access Private
export const createLead = async (req, res) => {
  try {
    const { name, company, email, phone, niche } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Lead name is required" });
    }

    const lead = await Lead.create({
      user: req.user._id,  // current logged in freelancer
      name,
      company,
      email,
      phone,
      niche,
    });

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all Leads of logged-in freelancer
// @route GET /api/leads
// @access Private
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ @desc Update lead status
// ✅ @route PUT /api/leads/:id
// ✅ @access Private
export const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    // Ensure the logged-in freelancer owns the lead
    if (lead.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    lead.status = status;
    await lead.save();

    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
