import { motion } from "framer-motion";

// Steps
const steps = [
  { step: "1", title: "Subscribe", desc: "Choose a monthly or annual plan." },
  { step: "2", title: "AI Finds Leads", desc: "Agent calls & negotiates deals automatically." },
  { step: "3", title: "Get Paid", desc: "Clients pay in 3 secure installments." },
];

// Step Icons
const stepIcons = [
  <span className="text-3xl font-extrabold text-white">1</span>,
  <span className="text-3xl font-extrabold text-white">2</span>,
  <span className="text-3xl font-extrabold text-white">3</span>,
];

// Spark Particle
const SparkParticle = ({ delay }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-pink-400"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      x: [0, (Math.random() - 0.5) * 50],
      y: [0, (Math.random() - 0.5) * 50],
    }}
    transition={{
      duration: 1,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

// Lightning Dot
const LightningDot = () => (
  <div className="relative flex items-center justify-center">
    <motion.div
      className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"
      initial={{ scale: 1, opacity: 0.8 }}
      animate={{
        scale: [1, 1.5, 0.9, 1.3, 1],
        opacity: [0.8, 1, 0.3, 1, 0.7],
        boxShadow: [
          "0 0 20px rgba(236,72,153,0.7), 0 0 40px rgba(168,85,247,0.5)",
          "0 0 50px rgba(236,72,153,1), 0 0 80px rgba(168,85,247,0.9)",
          "0 0 15px rgba(236,72,153,0.5), 0 0 30px rgba(168,85,247,0.4)",
          "0 0 60px rgba(236,72,153,0.9), 0 0 100px rgba(168,85,247,1)",
          "0 0 25px rgba(236,72,153,0.7), 0 0 50px rgba(168,85,247,0.5)",
        ],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute w-10 h-10 rounded-full border-2 border-pink-500/40"
      initial={{ scale: 0.5, opacity: 0.6 }}
      animate={{ scale: [0.5, 1.6], opacity: [0.6, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
    />
    {[...Array(4)].map((_, i) => (
      <SparkParticle key={i} delay={i * 0.2} />
    ))}
  </div>
);

const Workflow = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Futuristic Neon Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(168,85,247,0.25)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold text-center mb-20 
        bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400 
        text-transparent bg-clip-text tracking-wide"
      >
        How It Works
      </motion.h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Animated Vertical Data Line */}
        <motion.div
          className="absolute hidden md:block top-0 left-1/2 w-[2px] h-full bg-gradient-to-b from-pink-400 via-purple-500 to-pink-400"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "0% 100%" }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Top & Bottom Dots */}
        <div
          className="absolute hidden md:block top-0 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <LightningDot />
        </div>
        <div
          className="absolute hidden md:block bottom-0 left-1/2"
          style={{ transform: "translate(-50%, 50%)" }}
        >
          <LightningDot />
        </div>

        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div key={idx} className="relative flex w-full mb-20 items-center">
              {/* Horizontal Glowing Connector */}
              {isLeft ? (
                <>
                  <motion.div
                    className="absolute hidden md:block right-1/2 top-1/2 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400"
                    style={{ width: "23%" }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <div
                    className="absolute hidden md:block right-1/2 top-1/2"
                    style={{ transform: "translate(50%, -50%)" }}
                  >
                    <LightningDot />
                  </div>
                </>
              ) : (
                <>
                  <motion.div
                    className="absolute hidden md:block left-1/2 top-1/2 h-[2px] bg-gradient-to-l from-purple-400 to-pink-400"
                    style={{ width: "23%" }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <div
                    className="absolute hidden md:block left-1/2 top-1/2"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <LightningDot />
                  </div>
                </>
              )}

              {/* Futuristic Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3, duration: 0.7 }}
                className={`relative max-w-sm p-8 rounded-3xl 
                  bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
                  border border-purple-500/20 
                  shadow-[0_0_25px_rgba(168,85,247,0.3)] 
                  hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] 
                  hover:scale-105 hover:-rotate-1 transition-all duration-500
                  text-white 
                  mx-auto text-center 
                  md:mx-0 ${isLeft ? "md:mr-auto md:ml-6 md:text-left" : "md:ml-auto md:mr-6 md:text-right"}
                `}
              >
                {/* Step Badge */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 mb-6 mx-auto md:mx-0 shadow-lg relative overflow-hidden">
                  {stepIcons[idx]}
                  <span className="absolute inset-0 rounded-full bg-purple-500/40 blur-2xl"></span>
                </div>

                <h3 className="text-2xl font-semibold mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {step.desc}
                </p>

                {/* Accent Line */}
                <div className="mt-6 w-20 h-[3px] mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Workflow;
