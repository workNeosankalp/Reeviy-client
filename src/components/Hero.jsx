import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  // Ornamental corners
  const ornamentVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 via-slate-50 to-gray-200 pt-20 pb-16 md:pb-20 relative overflow-hidden vintage-texture mt-8 px-6">
      {/* Decorative corner ornaments - FIXED FOR MOBILE */}
      {/* Top Left */}
      <motion.div
        variants={ornamentVariants}
        initial="initial"
        animate="animate"
        className="absolute top-24 left-4 w-12 h-12 md:top-26 md:left-12 md:w-16 md:h-16 border-l-2 border-t-2 md:border-l-3 md:border-t-3 border-gray-400 md:border-gray-500 opacity-30"
      />
      {/* Top Right */}
      <motion.div
        variants={ornamentVariants}
        initial="initial"
        animate="animate"
        className="absolute top-24 right-4 w-12 h-12 md:top-26 md:right-12 md:w-16 md:h-16 border-r-2 border-t-2 md:border-r-3 md:border-t-3 border-gray-400 md:border-gray-500 opacity-30"
      />
      {/* Bottom Left */}
      <motion.div
        variants={ornamentVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-24 left-4 w-12 h-12 md:bottom-26 md:left-12 md:w-16 md:h-16 border-l-2 border-b-2 md:border-l-3 md:border-b-3 border-gray-400 md:border-gray-500 opacity-30"
      />
      {/* Bottom Right */}
      <motion.div
        variants={ornamentVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-24 right-4 w-12 h-12 md:bottom-26 md:right-12 md:w-16 md:h-16 border-r-2 border-b-2 md:border-r-3 md:border-b-3 border-gray-400 md:border-gray-500 opacity-30"
      />

      {/* Floating sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        >
          <Sparkles size={16} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative line above heading */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-linear-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"
          />

          {/* Main Heading with letter animation */}
          <motion.h1
            className="text-7xl md:text-9xl font-serif font-bold text-gray-800 mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {"Reeviy".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                }}
                className="inline-block"
                whileHover={{
                  scale: 1.2,
                  color: "#4a5568",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Decorative line below heading */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-px bg-linear-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"
          />

          {/* Tagline with typewriter effect */}
          <motion.p
            className="text-xl md:text-3xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Reeviy — Connecting Ideas, People, and Systems
          </motion.p>

          {/* CTA Button with glow effect */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 30px rgba(74, 85, 104, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            onClick={() => {
              document
                .getElementById("brands")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 text-white px-10 py-5 rounded-sm font-medium inline-flex items-center gap-3 shadow-2xl hover:from-gray-700 hover:to-gray-600 transition-all duration-500 border border-gray-600"
          >
            Discover More
            <ArrowRight size={22} />
          </motion.button>
        </motion.div>

        {/* Ornamental Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-24 md:mt-22 flex items-center justify-center mb-8"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 2.2 }}
            className="h-px bg-gray-400"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mx-6 w-4 h-4 border-2 border-gray-400"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 2.2 }}
            className="h-px bg-gray-400"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
