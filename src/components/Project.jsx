/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  isInternal,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <motion.div
        className="flex-wrap items-center justify-between py-8 px-6 space-y-6 sm:flex sm:space-y-0 rounded-lg border border-white/5 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 hover:border-white/10 transition-all duration-300 group"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        whileHover={{ y: -2 }}
      >
        <div className="flex-1">
          <p className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">{title}</p>
          <div className="flex gap-3 mt-3 flex-wrap">
            {tags.map((tag) => (
              <span key={tag.id} className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/5 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <motion.button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-300 font-semibold hover:border-cyan-300 transition-all"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore
          <img src="assets/arrow-right.svg" className="w-4 h-4" />
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isHidden && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            isInternal={isInternal}
            closeModal={() => setIsHidden(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
