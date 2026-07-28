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
  githubLink,
  isInternal,
  category,
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
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/40 p-2 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-3xl border shadow-2xl rounded-2xl bg-slate-950 border-white/10 max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-lg top-2 right-2 sm:top-4 sm:right-4 bg-white/10 hover:bg-white/20 transition-all z-10 backdrop-blur-sm border border-white/20"
        >
          <img src="assets/close.svg" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="relative flex-shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-24 sm:h-40 md:h-56 object-cover rounded-t-2xl" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div
          className="p-3 sm:p-6 md:p-8 space-y-2 sm:space-y-4 overflow-y-auto flex-1 min-h-0"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div>
            {category && (
              <span className="inline-flex mb-2 text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-cyan-300/90 border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 rounded-md">
                {category}
              </span>
            )}
            <h5 className="mb-1 sm:mb-2 text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{title}</h5>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">{description}</p>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex gap-2 sm:gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{subDesc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
              {!isInternal && href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-300 font-semibold hover:border-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-all text-xs sm:text-sm flex-1 sm:flex-initial"
                >
                  Live Demo
                  <img
                    src="assets/arrow-up.svg"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    alt=""
                  />
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-white/5 border border-white/15 text-neutral-200 font-semibold hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.08)] transition-all text-xs sm:text-sm flex-1 sm:flex-initial"
                >
                  <img
                    src="assets/logos/github.svg"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    alt=""
                  />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
