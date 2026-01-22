import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Users,
  Star,
  Download,
  Sparkles,
  Clock,
  Package,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const brands = [
    {
      name: "ReckMe",
      description:
        "A fresh take on modern dating designed to encourage genuine connections, smarter matching, and real conversations. ReckMe moves beyond swipe culture to help you build meaningful relationships.",
      website: "https://reckme.com",
      playStoreUrl: "#",
      appStoreUrl: "#",
      logo: "/logo_reckme.png",
      isComingSoon: false,
    },
    {
      name: "Supply Chain Platform",
      description:
        "Revolutionizing supply chain management with smart logistics, real-time tracking, and seamless coordination. Coming soon to transform how businesses manage their supply chains.",
      website: null,
      logo: Package,
      logoColor: "text-blue-600",
      isComingSoon: true,
    },
    {
      name: "Fintech Solution",
      description:
        "Next-generation financial technology platform designed to simplify payments, investments, and financial management. Stay tuned for a smarter way to handle your finances.",
      website: null,
      logo: DollarSign,
      logoColor: "text-green-600",
      isComingSoon: true,
    },

    // Add more brands here in the future
  ];

  const maxIndex = Math.max(0, brands.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

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

  // Play Store Icon SVG
  const PlayStoreIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 mr-2"
      fill="currentColor"
    >
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.919V2.733a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
    </svg>
  );

  // App Store Icon SVG
  const AppStoreIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 mr-2"
      fill="currentColor"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );

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

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {brands.length > itemsPerView && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/90 hover:bg-white border-2 border-gray-400 rounded-full p-3 shadow-lg transition-all duration-300 ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110"
                }`}
                aria-label="Previous brands"
              >
                <ChevronLeft size={28} className="text-gray-700" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/90 hover:bg-white border-2 border-gray-400 rounded-full p-3 shadow-lg transition-all duration-300 ${
                  currentIndex === maxIndex
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110"
                }`}
                aria-label="Next brands"
              >
                <ChevronRight size={28} className="text-gray-700" />
              </button>
            </>
          )}

          {/* Slider Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-10"
              animate={{
                x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (40 / itemsPerView)}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  style={{
                    minWidth: `calc(${100 / itemsPerView}% - ${(40 * (itemsPerView - 1)) / itemsPerView}px)`,
                  }}
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

                    {brand.isComingSoon ? (
                      <div className="text-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mb-4"
                        >
                          {brand.logo && typeof brand.logo === "string" ? (
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="mx-auto w-20 h-20 object-contain"
                            />
                          ) : (
                            brand.logo && (
                              <brand.logo
                                className={`mx-auto ${brand.logoColor}`}
                                size={80}
                                strokeWidth={1.5}
                              />
                            )
                          )}
                        </motion.div>
                        <motion.div
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Clock
                            className="mx-auto mb-2 text-gray-600"
                            size={32}
                          />
                          <span className="text-xl font-bold font-serif text-gray-700">
                            COMING SOON
                          </span>
                        </motion.div>
                      </div>
                    ) : (
                      <>
                        {typeof brand.logo === "string" ? (
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-32 h-32 object-contain"
                          />
                        ) : (
                          <span className="text-lg font-serif">Brand Logo</span>
                        )}
                      </>
                    )}
                  </motion.div>

                  {/* Brand Name - Clickable if website exists */}
                  {brand.website ? (
                    <motion.a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-4xl font-serif font-bold text-gray-800 mb-4 block hover:text-gray-600 transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {brand.name}
                    </motion.a>
                  ) : (
                    <motion.h3
                      className="text-4xl font-serif font-bold text-gray-800 mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {brand.name}
                    </motion.h3>
                  )}

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

                  {/* App Store Buttons - Only show for active brands */}
                  {!brand.isComingSoon && (
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        href={brand.playStoreUrl}
                        className="flex-1 bg-linear-to-r from-gray-800 to-gray-700 text-white py-4 px-4 rounded-sm text-center font-medium transition-all duration-300 border border-gray-600 flex items-center justify-center"
                      >
                        <PlayStoreIcon />
                        <span className="hidden sm:inline">Play Store</span>
                        <span className="sm:hidden">Play</span>
                      </motion.a>
                      <motion.a
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        href={brand.appStoreUrl}
                        className="flex-1 bg-linear-to-r from-gray-700 to-gray-800 text-white py-4 px-4 rounded-sm text-center font-medium transition-all duration-300 border border-gray-500 flex items-center justify-center"
                      >
                        <AppStoreIcon />
                        <span className="hidden sm:inline">App Store</span>
                        <span className="sm:hidden">App</span>
                      </motion.a>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          {brands.length > itemsPerView && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-gray-700 w-8"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Brands;
