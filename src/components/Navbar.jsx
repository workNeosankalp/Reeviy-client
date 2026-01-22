import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  // Change navbar background on scroll
  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"],
  );

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    setIsOpen(false);

    if (location.pathname === path) {
      return;
    }

    navigate(path);
  };

  return (
    <motion.nav
      style={{ backgroundColor: navbarBg }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full backdrop-blur-md shadow-lg z-50 border-b-2 border-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with animation */}
          <div onClick={() => handleNavigation("/")}>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative"
            >
              {/* Logo Image - uncomment when you have logo */}
              <img
                src="/logo.png"
                alt="ReeViy"
                className="h-10 md:h-12 w-auto object-contain"
              />

              {/* Text Logo - comment out when using image */}
              <div
                className="text-3xl font-serif font-bold text-gray-800 tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              ></div>

              {/* Hover underline effect */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gray-800"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
                className={`font-medium transition-colors duration-200 cursor-pointer relative py-2 ${
                  isActive(item.path) ? "text-gray-900" : "text-gray-600"
                }`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-gray-200 mt-2"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigation(item.path)}
                className={`block py-3 transition-colors cursor-pointer ${
                  isActive(item.path)
                    ? "text-gray-900 font-semibold"
                    : "text-gray-700"
                }`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
