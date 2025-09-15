import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = {
    monthly: [
        { plan: "Starter", price: "₹1,560", features: ["Basic AI outreach", "Email support", "3 projects"] },
        { plan: "Pro", price: "₹4,018", features: ["Advanced AI outreach", "Calls + SMS", "Unlimited projects", "Priority support"], highlight: true },
        { plan: "Enterprise", price: "₹8,118", features: ["Custom AI agent", "Dedicated manager", "Team collaboration", "24/7 support"] },
    ],
    annually: [
        { plan: "Starter", price: "₹15,600", features: ["Basic AI outreach", "Email support", "3 projects"], saving: "Save ₹3,120" },
        { plan: "Pro", price: "₹40,180", features: ["Advanced AI outreach", "Calls + SMS", "Unlimited projects", "Priority support"], highlight: true, saving: "Save ₹8,036" },
        { plan: "Enterprise", price: "₹81,180", features: ["Custom AI agent", "Dedicated manager", "Team collaboration", "24/7 support"], saving: "Save ₹16,236" },
    ],
};

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const pricing = isAnnual ? pricingPlans.annually : pricingPlans.monthly;
    const navigate = useNavigate();

    return (
        <section id="pricing" className="py-20 px-6 bg-gradient-to-tr from-black via-purple-950/40 to-indigo-950/40">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-center mb-14">
                Simple, Transparent Pricing
            </motion.h2>
            <div className="flex justify-center mb-12">
                <div className="bg-gray-800 p-1 rounded-full flex items-center gap-2 relative">
                    <button onClick={() => setIsAnnual(false)} className={`py-2 px-4 rounded-full text-sm font-medium transition ${!isAnnual ? 'bg-purple-500 text-white shadow' : 'text-gray-400'}`}>Monthly</button>
                    <button onClick={() => setIsAnnual(true)} className={`py-2 px-4 rounded-full text-sm font-medium transition ${isAnnual ? 'bg-purple-500 text-white shadow' : 'text-gray-400'}`}>Annually</button>
                    <span className="absolute -top-7 text-xs bg-purple-500 text-white px-2 py-1 rounded-full right-0 animate-pulse">20% OFF!</span>
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
                {pricing.map((p, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} className={`p-8 rounded-2xl border ${p.highlight ? "border-purple-500 bg-purple-500/10 scale-105" : "border-white/10 bg-white/5"} shadow-lg backdrop-blur-md`}>
                        <h3 className="text-2xl font-bold mb-2">{p.plan}</h3>
                        <div className="text-3xl font-extrabold mb-2">{p.price}<span className="text-lg font-normal text-gray-400">{isAnnual ? '/year' : '/mo'}</span></div>
                        {p.saving && <p className="text-green-400 text-sm mb-4">{p.saving}</p>}
                        <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                            {p.features.map((f, i) => <li key={i} className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-purple-400" />{f}</li>)}
                        </ul>
                        <button onClick={() => navigate("/signup")} className={`w-full py-3 rounded-lg font-semibold transition ${p.highlight ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:brightness-110" : "border border-purple-400/50 hover:bg-purple-500/10"}`}>
                            Choose {p.plan}
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
