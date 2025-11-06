/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  isInternal,
  closeModal,
}) => {
  useEffect(() => {
    // Lock body scroll when modal opens
    document.body.style.overflow = "hidden";
    
    // Unlock body scroll when modal closes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full px-4 py-8 overflow-hidden backdrop-blur-lg bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative max-w-3xl max-h-[calc(100vh-80px)] border shadow-2xl rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-black border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.7, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.7, y: 40 }}
        transition={{ type: "spring", stiffness: 350, damping: 30, mass: 1 }}
      >
        <motion.button
          onClick={closeModal}
          className="absolute p-2.5 rounded-lg top-6 right-6 bg-white/10 hover:bg-white/20 transition-all z-10 backdrop-blur-sm border border-white/20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </motion.button>
        <motion.div
          className="relative h-48 md:h-64 overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
        >
          <img src={image} alt={title} className="w-4/5 h-full object-cover mx-auto rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>
        <motion.div
          className="p-6 md:p-10 space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h5 className="mb-2 text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{title}</h5>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">{description}</p>
          </motion.div>
          <motion.div
            className="space-y-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.05 }}
          >
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">{subDesc}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex items-center justify-between pt-4 border-t border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <motion.div
                  key={tag.id}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-5 h-5"
                  />
                </motion.div>
              ))}
            </div>
            {!isInternal && (
              <motion.a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-300 font-semibold hover:border-cyan-300 transition-all text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project 
                <img src="assets/arrow-up.svg" className="w-4 h-4" />
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
