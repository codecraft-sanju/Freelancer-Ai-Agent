import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Background gradient circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-800/20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-pink-800/20 blur-3xl animate-pulse"></div>

      {/* Main Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-bold mb-6 max-w-4xl leading-tight"
      >
        Ready to Automate Your Freelancing Career? <span className="text-purple-400">🚀</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl"
      >
        Scale your freelance business effortlessly with our AI-powered agent. Acquire clients, manage projects, and get paid — all automated.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }} 
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          onClick={() => navigate("/signup")} 
          className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-pink-600 text-lg font-semibold shadow-xl hover:brightness-110 transition"
        >
          Start Free Trial <ArrowRight className="h-5 w-5" />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          onClick={() => navigate("/login")} 
          className="px-8 py-4 rounded-2xl border border-purple-600 hover:bg-purple-700/10 text-lg font-semibold transition"
        >
          Freelancer Login
        </motion.button>
      </motion.div>

      {/* Small Info Text */}
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-gray-500 text-sm mt-8 max-w-md"
      >
        No credit card required. 100% risk-free. Start automating your freelance business today.
      </motion.p>
    </section>
  );
};

export default CTA;
