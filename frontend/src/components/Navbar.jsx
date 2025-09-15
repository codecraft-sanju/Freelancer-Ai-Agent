import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Workflow", href: "#workflow" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/2 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AI Freelancer Agent
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 text-gray-300 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-400 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg border border-purple-400/50 hover:bg-purple-500/10 text-sm transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold text-sm shadow hover:scale-105 transition"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-black/90 border-t border-white/10"
          >
            <ul className="flex flex-col gap-4 px-6 py-4 text-gray-300 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-purple-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 mt-2">
                <button
                  onClick={() => { setIsOpen(false); navigate("/login"); }}
                  className="flex-1 px-4 py-2 rounded-lg border border-purple-400/50 hover:bg-purple-500/10 text-sm transition"
                >
                  Login
                </button>
                <button
                  onClick={() => { setIsOpen(false); navigate("/signup"); }}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold text-sm shadow hover:scale-105 transition"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
