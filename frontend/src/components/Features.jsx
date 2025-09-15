import { motion, useMotionValue, useSpring } from "framer-motion";
import { Bot, DollarSign, Phone, ShieldCheck, Zap, Users } from "lucide-react";
import React from "react";

const features = [
    { icon: <Bot className="h-7 w-7 text-purple-400" />, title: "AI Agent Outreach", desc: "Automatically finds leads, extracts contacts, and makes human-like calls." },
    { icon: <DollarSign className="h-7 w-7 text-green-400" />, title: "3-Step Payment Flow", desc: "Clients pay securely in 3 installments, managed directly inside your dashboard." },
    { icon: <Phone className="h-7 w-7 text-pink-400" />, title: "Twilio Integration", desc: "Crystal-clear calls, SMS, and WhatsApp automation built-in with consent handling." },
    { icon: <ShieldCheck className="h-7 w-7 text-blue-400" />, title: "Privacy & Compliance", desc: "Fully compliant with GDPR, CCPA, TCPA and secure data encryption." },
    { icon: <Zap className="h-7 w-7 text-yellow-400" />, title: "Real-time Notifications", desc: "Get instant alerts for closed deals, payments, and project deadlines." },
    { icon: <Users className="h-7 w-7 text-indigo-400" />, title: "Service Customization", desc: "Choose your freelancing niche and let AI tailor outreach for max conversions." },
];

const Features = () => {
    const cardsRef = React.useRef([]);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 300 };
    const x = useSpring(rotateX, springConfig);
    const y = useSpring(rotateY, springConfig);

    const handleMouseMove = (e, index) => {
        const card = cardsRef.current[index];
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        rotateX.set((e.clientY - centerY) / (rect.height / 2) * -10);
        rotateY.set((e.clientX - centerX) / (rect.width / 2) * 10);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <section id="features" className="py-20 px-6 relative">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-center mb-14">
                Why Freelancers Love Our AI Agent
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {features.map((f, idx) => (
                    <motion.div 
                        key={idx}
                        ref={(el) => (cardsRef.current[idx] = el)}
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ delay: idx * 0.15 }}
                        style={{ perspective: 1000, rotateX: x, rotateY: y }}
                        onMouseMove={(e) => handleMouseMove(e, idx)}
                        onMouseLeave={handleMouseLeave}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 transition shadow-lg backdrop-blur-md cursor-pointer"
                    >
                        <div className="mb-4">{f.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
