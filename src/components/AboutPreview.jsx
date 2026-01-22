import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const handleLearnMore = () => {
    window.scrollTo(0, 0);
    navigate("/about");
  };

  return (
    <section
      ref={ref}
      className="py-32 bg-linear-to-b from-white to-gray-50 border-t-2 border-gray-300 relative vintage-texture"
    >
      {/* Decorative book icon floating */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 text-gray-300"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BookOpen size={48} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Ornamental top border */}
          <motion.div
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-gray-400"
            />
            <motion.div
              className="mx-4 w-3 h-3 border-2 border-gray-400 rotate-45"
              animate={{ rotate: [45, 90, 45] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-gray-400"
            />
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl font-serif font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Reeviy
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Reeviy is a next-generation digital platform company focused on
            building meaningful, human-first social and dating experiences. We
            blend data-driven insights, intuitive design, and behavioral
            understanding to create technology that helps people connect better.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            onClick={handleLearnMore}
            className="bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 text-white px-12 py-5 rounded-sm font-medium inline-flex items-center gap-3 vintage-shadow hover:from-gray-700 hover:to-gray-600 transition-all duration-500 border-2 border-gray-600 group"
          >
            <span style={{ fontFamily: "'Cinzel', serif" }}>
              Learn More About Us
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
