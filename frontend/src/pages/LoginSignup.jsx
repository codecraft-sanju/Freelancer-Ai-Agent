import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, LogIn, UserPlus } from "lucide-react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import DotGrid from "../components/DotGrid";
import "@tsamantanis/react-glassmorphism/dist/index.css";

const LoginSignup = () => {
  const { login, register: signup } = useAuth();
  const { register, handleSubmit } = useForm();
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setError("");
    setSuccess("");
    setLoading(false);
    setMode(mode === "login" ? "signup" : "login");
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      if (mode === "login") {
        const res = await login(data);
        setSuccess(`Welcome back, ${res.username}!`);
      } else {
        const res = await signup(formData);
        setSuccess(`Account created successfully for ${res.username}`);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* --- Animated Dot Background --- */}
      <div className="absolute inset-0">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* --- Responsive Glassmorphic Card --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg px-4 sm:px-6 lg:px-10"
      >
        <CustomCard
          effectColor="rgba(255,255,255,0.15)"
          color="rgba(0,0,0,0.55)"
          blur={12}
          borderRadius={24}
          style={{
            padding: "2rem",
          }}
          className="sm:p-8 lg:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: mode === "signup" ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === "signup" ? -40 : 40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* --- Title with Icon --- */}
              <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
                {mode === "login" ? (
                  <LogIn className="h-6 w-6 sm:h-7 sm:w-7 text-indigo-400" />
                ) : (
                  <UserPlus className="h-6 w-6 sm:h-7 sm:w-7 text-pink-400" />
                )}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wide drop-shadow-md">
                  {mode === "login" ? "Welcome Back" : "Create Account"}
                </h2>
              </div>

              {/* --- Form --- */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                {mode === "signup" && (
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="peer w-full rounded-xl border border-white/20 bg-white/5 px-4 pt-5 pb-3 sm:pb-4 text-white placeholder-transparent shadow-sm focus:ring-2 focus:ring-pink-400 outline-none transition duration-300"
                      placeholder="Username"
                    />
                    <label className="absolute left-4 top-2 text-sm sm:text-base text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400">
                      Username
                    </label>
                  </div>
                )}

                <div className="relative">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full rounded-xl border border-white/20 bg-white/5 px-4 pt-5 pb-3 sm:pb-4 text-white placeholder-transparent shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition duration-300"
                    placeholder="Email"
                  />
                  <label className="absolute left-4 top-2 text-sm sm:text-base text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="peer w-full rounded-xl border border-white/20 bg-white/5 px-4 pt-5 pb-3 sm:pb-4 text-white placeholder-transparent shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none transition duration-300"
                    placeholder="Password"
                  />
                  <label className="absolute left-4 top-2 text-sm sm:text-base text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400">
                    Password
                  </label>
                </div>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 px-5 py-3 sm:py-4 font-semibold text-white text-base sm:text-lg shadow-lg transition duration-300 hover:brightness-110 disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : mode === "login" ? (
                    <>
                      <LogIn className="h-5 w-5" /> Login
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-5 w-5" /> Sign Up
                    </>
                  )}
                </motion.button>
              </form>

              {/* --- Error & Success Messages --- */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="mt-4 rounded-lg bg-red-500/80 p-3 text-center text-sm sm:text-base text-white shadow-md tracking-wider"
                  >
                    {error}
                  </motion.div>
                )}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="mt-4 rounded-lg bg-green-600/80 p-3 text-center text-sm sm:text-base text-white shadow-md tracking-wider"
                  >
                    {success}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* --- Toggle Login/Signup --- */}
              <motion.p
                onClick={toggleMode}
                whileHover={{ scale: 1.05 }}
                className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-indigo-300 cursor-pointer font-medium transition hover:text-pink-400 underline decoration-pink-400"
              >
                {mode === "login"
                  ? "Don’t have an account? Sign Up"
                  : "Already have an account? Login"}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </CustomCard>
      </motion.div>
    </div>
  );
};

export default LoginSignup;
