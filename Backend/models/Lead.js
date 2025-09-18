import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    name: { type: String, required: true },
    company: { type: String },
    email: { type: String },
    phone: { type: String },
    niche: { type: String }, 
    status: { 
      type: String, 
      enum: ["new", "contacted", "in-progress", "closed", "lost"], 
      default: "new" 
    }
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);
export default Lead;
