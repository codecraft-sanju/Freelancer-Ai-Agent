import { motion } from 'framer-motion';

const steps = [
  { step: '1', title: 'Subscribe', desc: 'Choose a monthly or annual plan.' },
  { step: '2', title: 'AI Finds Leads', desc: 'Agent calls & negotiates deals automatically.' },
  { step: '3', title: 'Get Paid', desc: 'Clients pay in 3 secure installments.' },
];

const dotAnimation = {
  initial: { scale: 0.8, opacity: 0.6 },
  animate: { scale: [0.8, 1.3, 0.8], opacity: [0.6, 1, 0.6] },
  transition: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
};

const Workflow = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-bold text-center mb-20 text-white"
      >
        How It Works
      </motion.h2>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute hidden md:block top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/20"></div>

        {/* Top Dot */}
        <motion.div
          className="absolute hidden md:block top-0 left-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-lg"
          style={{ translateX: '-50%', translateY: '-50%' }}
          initial="initial"
          animate="animate"
          variants={dotAnimation}
        />

        {/* Bottom Dot */}
        <motion.div
          className="absolute hidden md:block bottom-0 left-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-lg"
          style={{ translateX: '-50%', translateY: '50%' }}
          initial="initial"
          animate="animate"
          variants={dotAnimation}
        />

        {steps.map((step, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div key={idx} className="relative flex w-full mb-20 items-center">
              {/* Horizontal Line */}
              {isLeft ? (
                <>
                  <div
                    className="absolute hidden md:block right-1/2 top-1/2 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400"
                    style={{ width: '23%' }}
                  />
                  <motion.div
                    className="absolute hidden md:block right-1/2 top-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-lg"
                    style={{ translateX: '50%', translateY: '-50%' }}
                    initial="initial"
                    animate="animate"
                    variants={dotAnimation}
                  />
                </>
              ) : (
                <>
                  <div
                    className="absolute hidden md:block left-1/2 top-1/2 h-[2px] bg-gradient-to-l from-purple-400 to-pink-400"
                    style={{ width: '16%' }}
                  />
                  <motion.div
                    className="absolute hidden md:block left-1/2 top-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-lg"
                    style={{ translateX: '-50%', translateY: '-50%' }}
                    initial="initial"
                    animate="animate"
                    variants={dotAnimation}
                  />
                </>
              )}

              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3, duration: 0.6 }}
                className={`relative max-w-sm p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl hover:scale-105 hover:shadow-purple-700/50 transition-transform text-white
                  mx-auto text-center
                  md:mx-0 ${isLeft ? 'md:mr-auto md:ml-6 md:text-left' : 'md:ml-auto md:mr-6 md:text-right'}
                `}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-extrabold text-2xl mb-4 mx-auto md:mx-0 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-wide">{step.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{step.desc}</p>
                {/* Accent line inside card */}
                <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-50"></div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Workflow;
