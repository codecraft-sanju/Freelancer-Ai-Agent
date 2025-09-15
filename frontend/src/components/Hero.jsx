import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DotGrid from "./DotGrid";
import SplitText from "./SplitText";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <DotGrid dotSize={10} gap={15} baseColor="#271E37" activeColor="#5227FF" proximity={120} shockRadius={250} shockStrength={5} resistance={750} returnDuration={1.5} />
            </div>
            <div className="relative pt-28">
                <SplitText
                   text="AI Powered Freelancer Agent"

                    className="text-5xl p-3 sm:text-7xl tracking-tighter font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text animate-gradient-x mb-6"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-100px"
                    textAlign="center"
                    tag="h1"
                />
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-2xl text-gray-300 text-lg sm:text-xl mb-10 mx-auto leading-relaxed">
                    Automate client acquisition, deal negotiation, and project management. Save time, scale revenue, and close more clients — while your AI agent works for you.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/signup")} 
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold shadow-xl transition"
                    >
                        Get Started
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/login")} 
                        className="px-6 py-3 rounded-xl border border-purple-400/50 hover:bg-purple-500/10 font-semibold transition"
                    >
                        Freelancer Login
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
