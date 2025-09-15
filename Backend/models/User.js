import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Added fields
  subscriptionStatus: { type: String, default: "inactive" }, // trial, active, inactive
  planType: { type: String, default: "monthly" },         // monthly, annual
   serviceType: { type: String, default: null },                        // web dev, social media, etc.
    isAdmin: { type: Boolean, default: false },             // admin privileges
  },
  { timestamps: true }
);

// Password Hash 
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
