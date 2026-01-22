import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, Star, Download, Sparkles, Clock } from "lucide-react";

const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const brands = [
    {
      name: "ReckMe",
      description:
        "A fresh take on modern dating designed to encourage genuine connections, smarter matching, and real conversations. ReckMe moves beyond swipe culture to help you build meaningful relationships.",
      // stats: { users: '5K+', rating: '4.7', downloads: '25K+' },
      isComingSoon: false,
    },
    {
      name: "Coming Soon",
      description:
        "We're working on something exciting! Our next app will bring new ways to connect and build relationships. Stay tuned for more updates.",
      // stats: null,
      isComingSoon: true,
    },
    // Add more brands here in the future:
    // {
    //   name: 'Your New App',
    //   description: 'Description here',
    //   stats: { users: '10K+', rating: '4.8', downloads: '50K+' },
    //   isComingSoon: false
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="brands"
      ref={ref}
      className="py-24 bg-linear-to-br from-slate-50 via-gray-100 to-slate-100 border-t-2 border-gray-300 relative vintage-texture"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "150px" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-0.5 bg-linear-to-r from-transparent via-gray-500 to-transparent mx-auto mb-8"
          />

          <motion.h2
            className="text-6xl md:text-7xl font-serif font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Brands
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-linear-to-r from-transparent via-gray-500 to-transparent mx-auto mb-6"
          />

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontFamily: "'Lora', serif" }}
          >
            Discover our premium services designed with excellence
          </motion.p>
        </motion.div>

        {/* Brand Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-10"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`bg-linear-to-br from-white to-gray-50 p-10 rounded-sm vintage-shadow border-2 border-gray-300 relative overflow-hidden group ${brand.isComingSoon ? "opacity-90" : ""}`}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-gray-400 opacity-40" />
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gray-400 opacity-40" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-gray-400 opacity-40" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gray-400 opacity-40" />

              {/* Hover sparkle effect - Only for active brands */}
              {!brand.isComingSoon && (
                <motion.div
                  className="absolute top-4 right-4 text-gray-400"
                  initial={{ opacity: 0, rotate: 0 }}
                  whileHover={{ opacity: 1, rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles size={24} />
                </motion.div>
              )}

              {/* Brand Logo Placeholder */}
              <motion.div
                className={`w-full h-56 bg-linear-to-br ${brand.isComingSoon ? "from-gray-300 to-gray-400" : "from-gray-200 to-gray-300"} rounded-sm mb-8 flex items-center justify-center text-gray-500 overflow-hidden relative`}
                whileHover={{ scale: brand.isComingSoon ? 1 : 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {!brand.isComingSoon && (
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                )}

                {/* Show "COMING SOON" text in logo area for coming soon brands */}
                {brand.isComingSoon ? (
                  <div className="text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Clock className="mx-auto mb-3 text-gray-600" size={48} />
                    </motion.div>
                    <span className="text-2xl font-bold font-serif text-gray-700">
                      COMING SOON
                    </span>
                  </div>
                ) : (
                  <span className="text-lg font-serif">Brand Logo</span>
                )}
              </motion.div>

              {/* Brand Name */}
              <motion.h3
                className="text-4xl font-serif font-bold text-gray-800 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ color: "#4a5568" }}
              >
                {brand.name}
              </motion.h3>

              {/* Decorative divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "80px" } : {}}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                className="h-0.5 bg-gray-400 mb-6"
              />

              {/* Brand Description */}
              <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {brand.description}
              </p>

              {/* Stats Grid - COMMENTED OUT FOR FUTURE USE */}
              {/* {!brand.isComingSoon && brand.stats && (
      <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-t-2 border-b-2 border-gray-300">
        {[
          { icon: Users, value: brand.stats.users, label: 'Users' },
          { icon: Star, value: brand.stats.rating, label: 'Rating' },
          { icon: Download, value: brand.stats.downloads, label: 'Downloads' }
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center"
          >
            <stat.icon className="mx-auto mb-2 text-gray-600" size={24} />
            <motion.div
              className="font-bold text-gray-800 text-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.1, type: "spring" }}
            >
              {stat.value}
            </motion.div>
            <div className="text-xs font-bold  text-gray-500 uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    )} */}

              {/* App Store Buttons - Only show for active brands */}
              {!brand.isComingSoon && (
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex-1 bg-linear-to-r from-gray-800 to-gray-700 text-white py-4 px-6 rounded-sm text-center font-medium transition-all duration-300 border border-gray-600"
                  >
                    Play Store
                  </motion.a>
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex-1 bg-linear-to-r from-gray-700 to-gray-800 text-white py-4 px-6 rounded-sm text-center font-medium transition-all duration-300 border border-gray-500"
                  >
                    App Store
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
