/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileModal from "../components/ProfileModal";

function Navigation({ onItemClick }) {
  const navItems = ["Home", "About", "Work", "Contact"];
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavClick = (item) => {
    const elementId = item.toLowerCase();
    
    // If we're on a legal page (terms/privacy), navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    // Close mobile menu if callback provided
    if (onItemClick) {
      onItemClick();
    }
  };
  
  return (
    <ul className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-8 list-none">
      {navItems.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            onClick={() => handleNavClick(item)}
            className="relative px-4 py-2 text-sm md:text-base font-medium text-neutral-300 hover:text-white transition-colors duration-300 group cursor-pointer border-0 bg-transparent"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
          </button>
        </motion.li>
      ))}
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <motion.div 
      className="fixed inset-x-0 z-20 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        profileImage="assets/sandy.jpeg"
      />
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-white/5 backdrop-blur-2xl bg-gradient-to-b from-neutral-950/90 to-neutral-950/50 rounded-b-xl shadow-lg">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Profile Picture */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="relative w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500 p-0.5 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer border-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center overflow-hidden border border-white/10">
                <img
                  src="assets/sandyy.webp"
                  alt="Sandesh Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.button>

            {/* Name */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="text-lg md:text-xl font-bold bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-300 cursor-pointer border-0 p-0 background-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sandesh
            </motion.button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none sm:hidden transition-colors duration-200"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="sm:hidden overflow-hidden text-center border-b border-neutral-800/30 backdrop-blur-xl bg-neutral-950/50 motion-optimized"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.3 }}
          style={{ originY: 0 }}
        >
          <nav className="py-6 space-y-3">
            <Navigation onItemClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
