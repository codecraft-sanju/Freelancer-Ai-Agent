import express from "express";
import { createLead, getLeads, updateLeadStatus } from "../controllers/leadController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createLead);
router.get("/", protect, getLeads);
router.put("/:id", protect, updateLeadStatus); // ✅ ensure imported

export default router;
