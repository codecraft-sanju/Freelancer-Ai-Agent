import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonialsRow1 = [
  { name: "Aarav S.", role: "Freelance Developer", feedback: "Closed 5 clients in the first week!", rating: 5 },
  { name: "Meera P.", role: "UI/UX Designer", feedback: "Payment automation saved me tons of stress.", rating: 4 },
  { name: "Raj K.", role: "Content Writer", feedback: "I scale my freelance income without chasing leads.", rating: 5 },
  { name: "Priya L.", role: "Marketing Consultant", feedback: "Analytics dashboard is a game-changer.", rating: 5 },
];

const testimonialsRow2 = [
  { name: "Anil R.", role: "Web Developer", feedback: "The onboarding was seamless, highly recommend!", rating: 4 },
  { name: "Sanya T.", role: "Graphic Designer", feedback: "My workflow is now 10x faster!", rating: 5 },
  { name: "Vikram J.", role: "SEO Specialist", feedback: "Clients love the instant reporting feature.", rating: 4 },
  { name: "Kavya R.", role: "Social Media Manager", feedback: "Managing campaigns is so much easier now!", rating: 5 },
];

// Testimonial Card Component
const TestimonialCard = ({ t }) => (
  <div className="p-4 min-w-[250px] rounded-2xl bg-white/5 border border-white/10 shadow-md backdrop-blur-md flex flex-col">
    <div className="flex gap-1 mb-2">
      {[...Array(t.rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-300 text-sm">{t.feedback}</p>
    <div className="mt-2 font-semibold text-white">{t.name}</div>
    <div className="text-xs text-gray-400">{t.role}</div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
        Loved by Freelancers Worldwide
      </h2>

      {/* First Row - Left to Right */}
      <div className="overflow-hidden mb-8">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicate inside for continuous flow */}
          {[...testimonialsRow1, ...testimonialsRow1].map((t, idx) => (
            <TestimonialCard key={idx} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicate inside for continuous flow */}
          {[...testimonialsRow2, ...testimonialsRow2].map((t, idx) => (
            <TestimonialCard key={idx} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
