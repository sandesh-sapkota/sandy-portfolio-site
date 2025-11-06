/* eslint-disable react/prop-types */

import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const ProfileModal = ({ isOpen, onClose, profileImage }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.2 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          >
            <motion.div
              className="w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-neutral-700 shadow-2xl overflow-hidden relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Fixed Position */}
              <motion.button
                className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Content */}
              <div className="p-6 md:p-8 text-center">
                {/* Profile Picture */}
                <motion.div
                  className="mb-6 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                >
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 p-1 shadow-lg shadow-purple-500/30">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden border border-neutral-600">
                      <img
                        src={profileImage}
                        alt="Sandesh Sapkota"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-1">
                    Sandesh Sapkota
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-400 mb-4">
                    AI-Powered Frontend Engineer
                  </p>
                </motion.div>

                {/* About Me Section */}
                <motion.div
                  className="mb-4 text-left"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 uppercase tracking-wider">
                    About Me
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                    Hi, I&apos;m Sandesh Sapkota (Sandy) from Kathmandu, Nepal.
                    Frontend Developer & AI-Powered Solutions Engineer. I build
                    modern, scalable web apps using React, Node.js, cloud
                    technologies, and AI.
                  </p>
                </motion.div>

                {/* Interests Section */}
                <motion.div
                  className="mb-4 text-left"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-2 uppercase tracking-wider">
                    Interests
                  </h3>
                  <ul className="text-xs md:text-sm text-neutral-300 leading-relaxed space-y-0.5 list-none">
                    <li>🎵 Music — singing and playing instruments</li>
                    <li>✈️ Travelling — exploring new places</li>
                    <li>
                      📚 Learning & Research — discovering new ideas and
                      knowledge
                    </li>
                  </ul>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
